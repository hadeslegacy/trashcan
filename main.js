// python read me part 
/*This package will install Python 3.10.4 for macOS 10.9 or later for the following architecture(s): arm64, x86_64.

Certificate verification and OpenSSL

This package includes its own private copy of OpenSSL 1.1.1.   The trust certificates in system and user keychains managed by the Keychain Access application and the security command line utility are not used as defaults by the Python ssl module.  A sample command script is included in /Applications/Python 3.10 to install a curated bundle of default root certificates from the third-party certifi package (https://pypi.org/project/certifi/).  Double-click on Install Certificates to run it.

The bundled pip has its own default certificate store for verifying download connections.

Install Options

You can control some aspects of what is installed by this package. To see the options, click on the Customize button in the Installation Type step of the macOS installer app.  Click on a package name in the list shown to see more information about that option,
  
Using IDLE or other Tk applications 

This package includes its own private version of Tcl/Tk 8.6. It does not use any system-supplied or third-party supplied versions of Tcl/Tk.

Due to new security checks on macOS 10.15 Catalina, when launching IDLE macOS may open a window with a message "Python" would like to access files in your Documents folder.  This is normal as IDLE uses your Documents folder as its default when opening and saving files; you can still choose other locations in the Open and Save file dialog windows.  Click on the OK button to proceed.

macOS 11 (Big Sur) and Apple Silicon Mac support

For Python 3.10 releases, we provide a new universal2 installer variant that provides universal binaries for both ARM64 and Intel 64 architectures and is also supported on all Macs that support macOS 10.9 or later.  Some of the advantages of the new installer variant: native ARM64 code on Apple Silicon Macs should run significantly faster than Rosetta2-emulated code; some operating system functions and options introduced in macOS releases since 10.9 are now exposed when available (primarily in the os module); and the new installer variant includes Tcl/Tk 8.6.11 rather than 8.6.8.

On Apple Silicon Macs, it is possible to run Python either with native ARM64 code or under Intel 64 emulation using Rosetta2. This option might be useful for testing or if binary wheels are not yet available with native ARM64 binaries.  To  easily force Python to run in emulation mode, invoke it from a command line shell with the python3-intel64 command instead of just python3.

Other changes

For other changes in this release, see the What's new section in the Documentation Set for this release and its Release Notes link at https://www.python.org/downloads/.*/
