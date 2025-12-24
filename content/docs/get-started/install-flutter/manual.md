---
title: Install Flutter manually
description: Learn how to install and set up the Flutter SDK manually.
navigation:
  shortTitle: Install manually
---

Learn how to install and manually set up your Flutter development environment.

::u-alert
---
color: success
icon: i-lucide-lightbulb
title: Tip
variant: subtle
---
#description
If you've never set up or developed an app with Flutter before, follow [Get started with Flutter](https://docs.flutter.dev/get-started) instead.

If you're just looking to quickly install Flutter, consider [installing Flutter with VS Code](https://docs.flutter.dev/install/with-vs-code) for a streamlined setup experience.
::

## Choose your development platform

The instructions on this page are configured to cover installing Flutter on a **Windows** device.

If you'd like to follow the instructions for a different OS, please select one of the following.

::tabs{variant="pill"}
  :::tabs-item{icon="i-simple-icons-windows" label="Windows"}
  ## Download prerequisite software

  Before installing the Flutter SDK, first complete the following setup.

    ::::steps{level="3"}
    ### **Install Git for Windows**

    Download and install the latest version of [Git for Windows](https://git-scm.com/downloads/win).

    For help installing or troubleshooting Git, reference the [Git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

    ### **Set up an editor or IDE**

    For the best experience developing Flutter apps, consider installing and setting up an [editor or IDE with Flutter support](https://docs.flutter.dev/tools/editors).
    ::::
  :::

  :::tabs-item{icon="i-simple-icons-apple" label="macOS"}
  ## Download prerequisite software

  Before installing the Flutter SDK, first complete the following setup.

    ::::steps{level="3"}
    ### **Install the Xcode command-line tools**

    Download the Xcode command-line tools to get access to the command-line tools that Flutter relies on, including Git.

    To download the tools, run the following command in your preferred terminal:

    ```bash
    xcode-select --install
    ```

    If you haven't installed the tools already, a dialog should open that confirms you'd like to install them. Click **Install**, then once the installation is complete, click **Done**.

    ### **Set up an editor or IDE**

    For the best experience developing Flutter apps, consider installing and setting up an [editor or IDE with Flutter support](https://docs.flutter.dev/tools/editors).
    ::::
  :::

  :::tabs-item{icon="i-simple-icons-linux" label="Linux"}
  ## Download prerequisite software

  Before installing the Flutter SDK, first complete the following setup.

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

    ### **Set up an editor or IDE**

    For the best experience developing Flutter apps, consider installing and setting up an [editor or IDE with Flutter support](https://docs.flutter.dev/tools/editors).
    ::::
  :::

  :::tabs-item{icon="i-simple-icons-googlechrome" label="Linux"}
  ## Download prerequisite software

  Before installing the Flutter SDK, first complete the following setup.

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

    ### **Set up an editor or IDE**

    For the best experience developing Flutter apps, consider installing and setting up an [editor or IDE with Flutter support](https://docs.flutter.dev/tools/editors).
    ::::
  :::
::

## Install and set up Flutter

To install the Flutter SDK, download the latest bundle from the SDK archive, then extract the SDK to where you want it stored.

::steps
### **Download the Flutter SDK bundle**

Download the following installation bundle to get the latest stable release of the Flutter SDK.

  :::u-button
  ---
  class: rounded-full
  label: flutter\_linux\_3.38.5-stable.tar.xz
  size: xl
  to: https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.38.5-stable.tar.xz
  ---
  :::

### **Create a folder to store the SDK**

Create or find a folder to store the extracted SDK in. Consider creating and using a directory at `~/develop/`.

### **Extract the SDK**

Extract the SDK bundle you downloaded into the directory you want to store the Flutter SDK in.

1. Copy the following command.
2. Replace `<sdk_zip_path>` with the path to the bundle you downloaded.
3. Replace `<destination_directory_path>` with the path to the folder you want the extracted SDK to be in.
4. Run the edited command in your preferred terminal.

```bash
tar -xf <sdk_zip_path> -C <destination_directory_path>
```

For example, if you downloaded the bundle for Flutter 3.29.3 into the `~/Downloads` directory and want to store the extracted SDK in the `~/develop` directory:

```bash
tar -xf ~/Downloads/flutter_linux_3.29.3-stable.tar.xz -C ~/develop/
```
::

## Add Flutter to your PATH

Now that you've downloaded the SDK, add the Flutter SDK's `bin` directory to your `PATH` environment variable. Adding Flutter to your `PATH` allows you to use the `flutter` and `dart` command-line tools in terminals and IDEs.

::u-alert
---
icon: i-lucide-info
title: Tip
variant: subtle
---
#description
The following steps assume you've already [turned on Linux support](https://support.google.com/chromebook/answer/9145439) and that you're using Bash or the default shell on ChromeOS.

If you're using a different shell besides the default or Bash, follow the [add to path instructions for Linux](https://docs.flutter.dev/install/add-to-path#linux) instead.
::

::steps
### **Determine your Flutter SDK installation location**

Copy the absolute path to the directory that you downloaded and extracted the Flutter SDK into.

### **Add the Flutter SDK bin to your path**

To add the `bin` directory of your Flutter installation to your `PATH`:

1. Copy the following command.
2. Replace `<path-to-sdk>` with the path to your Flutter SDK install.
3. Run the edited command in your preferred terminal.

```bash
echo 'export PATH="<path-to-sdk>:$PATH"' >> ~/.bash_profile
```

For example, if you downloaded Flutter into a `develop/flutter` folder inside your user directory, you'd run the following:

```bash
echo 'export PATH="$HOME/develop/flutter/bin:$PATH"' >> ~/.bash_profile
```

### **Apply your changes**

To apply this change and get access to the `flutter` tool, close and reopen all open Zsh sessions in your terminal apps and IDEs.

### **Validate your setup**

To ensure you successfully added the SDK to your `PATH`, open a Zsh session in your preferred terminal, then try running the `flutter` and `dart` tools.

```bash
flutter --version
dart --version
```

If either command isn't found, check out [Flutter installation troubleshooting](https://docs.flutter.dev/install/troubleshoot).
::

## Continue your Flutter journey

Now that you've successfully installed Flutter, set up development for at least one target platform to continue your journey with Flutter.

::u-alert
---
color: success
icon: i-lucide-zap
title: Recommended
variant: subtle
---
#description
If you don't yet have a preferred platform to target during development, the Flutter team recommends you first try out [developing on the web](https://docs.flutter.dev/platform-integration/web/setup)!
::
