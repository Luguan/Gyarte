package luguan.me.gyarte;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.NavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import luguan.me.gyarte.response.Pupil;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener, PupilListFragment.OnListFragmentInteractionListener, PupilInfo.OnFragmentInteractionListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(GyarteApplication.getInstance().getKey() == null) {
            startActivity(new Intent(this, LoginActivity.class));
        }

       createPupilListFragment();

        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

    }

    private void createPupilListFragment() {
        Fragment fragment = new PupilListFragment();

        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction transaction = fm.beginTransaction();
        transaction.replace(R.id.main_fragment, fragment, "Pupil List").addToBackStack("Pupil_List");
        transaction.commit();
    }

    private void createPupilInfoFragment() {
        Fragment fragment = new PupilInfo();

        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction transaction = fm.beginTransaction();
        transaction.replace(R.id.main_fragment, fragment, "Pupil Info").addToBackStack("Pupil_Info");
        transaction.commit();
    }

    @Override
    public void onBackPressed() {

        if (getSupportFragmentManager().getBackStackEntryCount() == 0) {
            // End of back stack, minimize the app instead of going back into the loginscreen
            moveTaskToBack(true);
        }
        else {
            super.onBackPressed();
            Fragment pupilInfoFragment = getSupportFragmentManager().findFragmentByTag("Pupil_Info");
            if (pupilInfoFragment != null && pupilInfoFragment.isVisible()) {
                createPupilListFragment();
            }
            Fragment pupilListFragment = getSupportFragmentManager().findFragmentByTag("Pupil_List");
            if(pupilListFragment != null && pupilListFragment.isVisible()) {
                createPupilInfoFragment();
            }
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_camera) {
            // Handle the camera action
        } else if (id == R.id.nav_gallery) {

        } else if (id == R.id.nav_slideshow) {

        } else if (id == R.id.nav_manage) {

        } else if (id == R.id.nav_share) {

        } else if (id == R.id.nav_send) {

        }
        return true;
    }

    @Override
    public void onListFragmentInteraction(Pupil pupil) {
        Toast.makeText(this, pupil.getName(), Toast.LENGTH_SHORT).show();

        createPupilInfoFragment();
    }

    @Override
    public void onFragmentInteraction(Uri uri) {

    }
}
