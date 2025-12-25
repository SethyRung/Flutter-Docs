---
title: Install Flutter using VS Code
description: Learn how to use VS Code to quickly install and set up the Flutter SDK.
navigation:
  shortTitle: Install with VS Code
---

Learn how to install and set up Flutter in a Code OSS-based editor. This includes (but is not limited to), [VS Code](https://code.visualstudio.com/), [Antigravity](https://antigravity.google/), [Cursor](https://cursor.com/), and [Windsurf](https://windsurf.com/).

::card{color="success" icon="i-lucide-lightbulb" title="Tip"}
If you've never set up or developed an app with Flutter before, follow [Set up and test drive Flutter](https://docs.flutter.dev/get-started/quick) instead.
::

## Choose your development platform

The instructions on this page are configured to cover installing Flutter on a **Linux** device.

If you'd like to follow the instructions for a different OS, please select one of the following.

::tabs{variant="pill"}
  :::tabs-item{icon="i-simple-icons-windows" label="Windows"}
  ## Download prerequisite software

  For the smoothest Flutter setup, first install the following tools.

    ::::steps{level="3"}
    ### **Install Git for Windows**

    Download and install the latest version of [Git for Windows](https://git-scm.com/downloads/win).

    For help installing or troubleshooting Git, reference the [Git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

    ### **Download and install Visual Studio Code**

    To quickly install Flutter, then edit and debug your apps, [install and set up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview).
    ::::
  :::

  :::tabs-item{icon="i-simple-icons-apple" label="macOS"}
  ## Download prerequisite software

  For the smoothest Flutter setup, first install the following tools.

    ::::steps{level="3"}
    ### **Install the Xcode command-line tools**

    Download the Xcode command-line tools to get access to the command-line tools that Flutter relies on, including Git.

    To download the tools, run the following command in your preferred terminal:

    ```bash
    xcode-select --install
    ```

    If you haven't installed the tools already, a dialog should open that confirms you'd like to install them. Click **Install**, then once the installation is complete, click **Done**.

    ### **Download and install Visual Studio Code**

    To quickly install Flutter, then edit and debug your apps, [install and set up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview).
    ::::
  :::

  :::tabs-item{icon="i-simple-icons-linux" label="Linux"}
  ## Download prerequisite software

  For the smoothest Flutter setup, first install the following tools.

    ::::steps{level="3"}
    ### **Download and install prerequisite packages**

    Using your preferred package manager or mechanism, install the latest versions of the following packages:

    - `curl`
    - `git`
    - `unzip`
    - `xz-utils`
    - `zip`
    - `libglu1-mesa`

    On Debian-based distros with `apt-get`, such as Ubuntu, install these packages using the following commands:

    ```bash
    sudo apt-get update -y && sudo apt-get upgrade -y
    sudo apt-get install -y curl git unzip xz-utils zip libglu1-mesa
    ```

    ### **Download and install Visual Studio Code**

    To quickly install Flutter, then edit and debug your apps, [install and set up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview).
    ::::
  :::

  :::tabs-item{icon="i-simple-icons-googlechrome" label="Linux"}
  ## Download prerequisite software

  For the smoothest Flutter setup, first install the following tools.

    ::::steps{level="3"}
    ### **Set up Linux support**

    If you haven't set up Linux support on your Chromebook before, [Turn on Linux support](https://support.google.com/chromebook/answer/9145439).

    If you've already turned on Linux support, ensure it's up to date following the [Fix problems with Linux](https://support.google.com/chromebook/answer/9145439?hl=en#:~\:text=Fix%20problems%20with%20Linux) instructions.

    ### **Download and install prerequisite packages**

    Using `apt-get` or your preferred installation mechanism, install the latest versions of the following packages:

    - `curl`
    - `git`
    - `unzip`
    - `xz-utils`
    - `zip`
    - `libglu1-mesa`

    If you want to use `apt-get`, install these packages using the following commands:

    ```bash
    sudo apt-get update -y && sudo apt-get upgrade -y
    sudo apt-get install -y curl git unzip xz-utils zip libglu1-mesa
    ```

    ### **Download and install Visual Studio Code**

    To quickly install Flutter, then edit and debug your apps, [install and set up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview).
    ::::
  :::
::

## Install and set up Flutter

Now that you've installed Git and VS Code, follow these steps to use VS Code to install and set up Flutter.

::u-alert
---
icon: i-lucide-info
title: Download manually
variant: subtle
---
#description
  :::div
  If you prefer to manually install Flutter, follow the instructions in
  [Install Flutter manually](https://docs.flutter.dev/install/manual).
  :::
::

::steps{level="3"}
### Launch VS Code

If not already open, open VS Code by searching for it with Spotlight or opening it manually from the directory where it's installed.

### Add the Flutter extension to VS Code

To add the Dart and Flutter extensions to VS Code, visit the [Flutter extension's marketplace page](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter), then click Install. If prompted by your browser, allow it to open VS Code.

### Install Flutter with VS Code

1. Open the command palette in VS Code. :br Go to **View** > **Command Palette** or press `Control` + `Shift` + `P`.
2. In the command palette, type `flutter`.
3. Select **Flutter: New Project**.
4. VS Code prompts you to locate the Flutter SDK on your computer. Select **Download SDK**.
5. When the **Select Folder for Flutter SDK** dialog displays, choose where you want to install Flutter.
6. Click **Clone Flutter**. :br While downloading Flutter, VS Code displays this pop-up notification: :br`Downloading the Flutter SDK. This may take a few minutes.`This download takes a few minutes. If you suspect that the download has hung, click Cancel then start the installation again.
7. VS Code might display a Google Analytics notice. :br If you agree, click **OK**.
8. To ensure that Flutter is available in all terminals:
   - Close, then reopen all terminal windows.
   - Restart VS Code.

### Troubleshoot installation issues

If you encounter any issues during installation, check out [Flutter installation troubleshooting](https://docs.flutter.dev/install/troubleshoot).
::

## Continue your Flutter journey

Now that you've successfully installed Flutter, set up development for at least one target platform to continue your journey with Flutter.
