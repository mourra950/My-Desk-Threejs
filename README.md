# My desk Threejs

A simple Threejs scene where I modeled a simple disk using a blender.

## How to Run
sometimes an error appears using parcel that looks like that.
```ssh
parcel : npm\parcel.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at 
https:/go.microsoft.com/fwlink/?LinkID=135170.
```
in this case you must visit this link
```ssh
https://www.sharepointdiary.com/2014/03/fix-for-powershell-script-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system.html
```
to make the project work you follow these steps.
to initialize the npm environment

```ssh
npm init -y
```

to install parcel files, project manager

```ssh
npm install parcel
```

to install Threejs the 3D game/web engine

```ssh
npm install three
```

then you can deploy the web page using parcel by executing the following command in the terminal

```ssh
parcel ./src/index.html
```
