package com.rebus;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;
import com.horcrux.toggle.*;
import com.davidsandor.rnclipboardandroid.RNClipboardAndroidPackage;
import cl.json.RNSharePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import co.realtime.reactnativemessagingandroid.RealtimeMessagingPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Rebus";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new ToggleViewPackage(),
            new RNClipboardAndroidPackage(),
            new RNSharePackage(),
            new VectorIconsPackage(),
            new RealtimeMessagingPackage()
        );
    }
}
