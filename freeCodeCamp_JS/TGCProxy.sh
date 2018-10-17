#!/bin/sh
####################################################################################################
#
# Based on: https://macmule.com/2014/12/07/how-to-change-the-automatic-proxy-configuration-url-in-system-preferences-via-a-script/
#
# Modified: Kevin Friel NCBUniversal 5/14/15
# 			8/19/15 to add new search domains
#			9/14/15 version for new search domains push - option to be interactive
#           3/24/16 TGC version
#
# $5 is the interactive switch - use for interactive Self Service
# Leave blank for non interactive push
#
####################################################################################################

######################################################################################
#
# HARDCODED VALUES ARE SET HERE
#
######################################################################################


autoProxyURL="http://proxy.inbcu.com:7070/proxy.pac"

locationCheck="NBCU AutoProxy"

interActive=""

# CHECK TO SEE IF A VALUE WAS PASSED FOR $4, AND IF SO, ASSIGN IT
if [ "$4" != "" ] && [ "$autoProxyURL" == "" ]; then
autoProxyURL=$4
fi

# CHECK TO SEE IF A VALUE WAS PASSED FOR $5, AND IF SO, ASSIGN IT
if [ "$5" != "" ]; then
interActive="YES"
fi


######################################################################################
#
# Function to remove workingtemplocation if exists
#
######################################################################################

wtCleanup()
{
wtpexists=`networksetup -listlocations | grep "workingtemplocation"`
if [ "$wtpexists" ]; then
	echo "removing workingtemplocation"
	networksetup -deletelocation workingtemplocation
fi
sleep 2

}

######################################################################################
#
# Function to add autoproxy settings to any newly added interfaces
# without affecting other settings
#
######################################################################################

autoproxyadd()
{
# Detects all network hardware & creates services for all installed network hardware
/usr/sbin/networksetup -detectnewhardware

IFS=$'\n'

	#Loops through the list of network services
	for i in $(networksetup -listallnetworkservices | tail +2 );
	do
	
		# Get a list of all services
		autoProxyURLLocal=`/usr/sbin/networksetup -getautoproxyurl "$i" | head -1 | cut -c 6-`
			
		# If the value returned of $autoProxyURLLocal does not match the value of $autoProxyURL for the interface $i, change it.
		if [[ $autoProxyURLLocal != $autoProxyURL ]]; then
			/usr/sbin/networksetup -setautoproxyurl $i $autoProxyURL
#			echo "Set auto proxy for $i to $autoProxyURL"
		fi
		
		# Enable auto proxy once set
		/usr/sbin/networksetup -setautoproxystate "$i" on
		networksetup -setproxyautodiscovery "$i" off
		networksetup -setwebproxystate "$i" off
		networksetup -setsecurewebproxystate "$i" off
		networksetup -setftpproxystate "$i" off
		networksetup -setsocksfirewallproxystate "$i" off
		networksetup -setstreamingproxystate "$i" off
		networksetup -setgopherproxystate "$i" off

		
		# set bypass proxy settings
		networksetup -setproxybypassdomains "$i" "*.local" "169.254/16" "*.tfayd.com" "*.nbcuni.ge.com" "*.inbcu.com" "*.mail.tfayd.com" "*.stg-tfayd.com" "*.e2k.ad.ge.com" "*.cns.comcastnets.com" "*.ceg.comcastnets.com" "*.tgcinc.com" "*.eentertainment.com" "*.cable.comcast.com" "*.corphq.comcast.com" "*.comcastnets.com" "*.eng.interplay3.prod" "*.udh.unistudios.com" "*.interactive.msnbc.com"

		# set DNS Search Domains
		networksetup -setsearchdomains "$i" tfayd.com cns.comcastnets.com ceg.comcastnets.com nbcuni.ge.com comcastnets.com tgcinc.com eng.interplay3.prod cable.comcast.com corphq.comcast.com eentertainment.com inbcu.com
	done

unset IFS
echo "Auto Proxy now set & enabled for all interfaces"

}

######################################################################################
#
# Function to create or reset NBCU AutoProxy
#
######################################################################################

autoproxyreset()
{
resetyes=`networksetup -listlocations | grep "AutoProxy"`
echo $resetyes

# first make a temp location
networksetup -createlocation workingtemplocation
networksetup -switchtolocation workingtemplocation

if [ "$resetyes" ]; then
# then delete NBCU AutoProxy if already setup
networksetup -deletelocation "NBCU AutoProxy"
echo "deleted NBCU AutoProxy"
fi

# creates new location NBCU AutoProxy
networksetup -createlocation "NBCU AutoProxy" populate
echo "created NBCU AutoProxy"
networksetup -switchtolocation "NBCU AutoProxy"
# delete temp
networksetup -deletelocation workingtemplocation

sleep 2

echo "set to NBCU AutoProxy"

# Detects all network hardware & creates services for all installed network hardware
/usr/sbin/networksetup -detectnewhardware

IFS=$'\n'

	#Loops through the list of network services
	for i in $(networksetup -listallnetworkservices | tail +2 );
	do
	
		# Get a list of all services
		autoProxyURLLocal=`/usr/sbin/networksetup -getautoproxyurl "$i" | head -1 | cut -c 6-`
		
		# Echo's the name of any matching services & the autoproxyURL's set
		echo "$i Proxy set to $autoProxyURLLocal"
	
		# If the value returned of $autoProxyURLLocal does not match the value of $autoProxyURL for the interface $i, change it.
		if [[ $autoProxyURLLocal != $autoProxyURL ]]; then
			/usr/sbin/networksetup -setautoproxyurl $i $autoProxyURL
			echo "Set auto proxy for $i to $autoProxyURL"
		fi
		
		# Enable auto proxy once set
		/usr/sbin/networksetup -setautoproxystate "$i" on
		echo "Turned on auto proxy for $i" 
		
		# turn off other proxy settings
		networksetup -setproxyautodiscovery "$i" off
		networksetup -setwebproxystate "$i" off
		networksetup -setsecurewebproxystate "$i" off
		networksetup -setftpproxystate "$i" off
		networksetup -setsocksfirewallproxystate "$i" off
		networksetup -setstreamingproxystate "$i" off
		networksetup -setgopherproxystate "$i" off

		
		# set bypass proxy settings
		networksetup -setproxybypassdomains "$i" "*.local" "169.254/16" "*.tfayd.com" "*.nbcuni.ge.com" "*.inbcu.com" "*.mail.tfayd.com" "*.stg-tfayd.com" "*.e2k.ad.ge.com" "*.cns.comcastnets.com" "*.ceg.comcastnets.com" "*.tgcinc.com" "*.eentertainment.com" "*.cable.comcast.com" "*.corphq.comcast.com" "*.comcastnets.com" "*.eng.interplay3.prod" "*.udh.unistudios.com" "*.interactive.msnbc.com"
		echo "Set bypass domains for $i"
	
		# set DNS Search Domains
		networksetup -setsearchdomains "$i" tfayd.com cns.comcastnets.com ceg.comcastnets.com nbcuni.ge.com comcastnets.com tgcinc.com eng.interplay3.prod cable.comcast.com corphq.comcast.com eentertainment.com inbcu.com
        echo "Set Search Domains"

	done

unset IFS

# sets to new location 
networksetup -switchtolocation "NBCU AutoProxy"
echo "set to NBCU AutoProxy"

# Echo that we're done
echo "Auto Proxy config created/reset, set & enabled for all interfaces"
}

######################################################################################
#
# Start main script
#
######################################################################################

currentLocation=`networksetup -getcurrentlocation`
echo "current location: $currentLocation"
apexists=`networksetup -listlocations | grep "AutoProxy"`
echo "apexists: $apexists"

# pre-emptive cleanup
wtCleanup

# check for interactive mode
if [ "$interActive" != "" ]; then
echo "using interactive mode"
if [ "$apexists" ]; then
	popup1=$( osascript \
-e 'tell application "Finder"' \
-e 'activate' \
-e 'set dialog_result to display dialog "A network location named NBCU AutoProxy already exists.  Do you want to reset that location or add a new network interface?  (such as a new Ethernet adapter or Apple Thunderbolt Display)" with title "NBCU AutoProxy" buttons {"Reset","Add"}' \
-e 'end tell' \
-e 'tell application "Self Service"' \
-e 'activate' \
-e 'end tell' \
-e 'get button returned of dialog_Result'
)
	if [ "$popup1" == "Reset" ]; then
		echo "Resetting NBCU AutoProxy"
		if [ "$currentLocation" == "$locationCheck" ]; then
			echo "Current Location is NBCU AutoProxy, resetting"
			autoproxyreset
		else
			echo "Current Location is not NBCU AutoProxy, but exists and switching to it"
			networksetup -switchtolocation "$locationCheck"
			echo "Current Location is now NBCU AutoProxy, resetting"
			#	networksetup -deletelocation "NBCU AutoProxy"
			autoproxyreset
		fi
	else
		echo "Adding new interfaces to NBCU AutoProxy"
		autoproxyadd
	fi
else
	echo "Creating NBCU AutoProxy"
	autoproxyreset
fi

else
# non interactive mode
echo "using non-interactive mode"
	if [ "$currentLocation" == "$locationCheck" ]; then
		echo "Current Location is NBCU AutoProxy, resetting"
		autoproxyreset
	else
		if [ "$apexists" ]; then
			# change location to NBCU AutoProxy
			echo "Current Location is not NBCU AutoProxy, but exists and switching to it"
			networksetup -switchtolocation "$locationCheck"
			echo "Current Location is now NBCU AutoProxy, resetting"
			autoproxyreset
			# change location back to original location
			# echo "Changing location back to original location: $currentLocation"
			# networksetup -switchtolocation "$currentLocation"
		else
			echo "Current Location is not NBCU AutoProxy, does not exist"
			echo "Creating NBCU AutoProxy"
			autoproxyreset
			# change location back to original location
			# echo "Changing location back to original location: $currentLocation"
			# networksetup -switchtolocation "$currentLocation"
		fi
	fi
fi

# cleanup
wtCleanup

sleep 5
exit 0