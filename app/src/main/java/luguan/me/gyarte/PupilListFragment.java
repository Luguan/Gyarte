package luguan.me.gyarte;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import luguan.me.gyarte.dummy.DummyContent;
import luguan.me.gyarte.dummy.DummyContent.DummyItem;
import luguan.me.gyarte.response.LoginResponse;
import luguan.me.gyarte.response.Pupil;
import luguan.me.gyarte.response.PupilsResponse;
import retrofit.Call;
import retrofit.Callback;
import retrofit.Response;
import retrofit.Retrofit;

import java.util.List;

/**
 * A fragment representing a list of Items.
 * <p/>
 * Activities containing this fragment MUST implement the {@link OnListFragmentInteractionListener}
 * interface.
 */
public class PupilListFragment extends Fragment {

    // TODO: Customize parameter argument names
    private static final String ARG_COLUMN_COUNT = "column-count";
    // TODO: Customize parameters
    private int mColumnCount = 1;
    private OnListFragmentInteractionListener mListener;

    private RecyclerView recyclerView;

    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public PupilListFragment() {
    }

    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static PupilListFragment newInstance(int columnCount) {
        PupilListFragment fragment = new PupilListFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_COLUMN_COUNT, columnCount);
        fragment.setArguments(args);
        return fragment;
    }

    private void loadPupils() {
        Call<PupilsResponse> call = GyarteApplication.getInstance().getApiInstance().apiService.getPupils(new GetPupils(GyarteApplication.getInstance().getKey()));
    call.enqueue(new Callback<PupilsResponse>() {
        @Override
        public void onResponse(Response<PupilsResponse> response, Retrofit retrofit) {
            int statusCode = response.code();
            PupilsResponse response1 = response.body();
            if(response1.getPupils() != null) {
                recyclerView.setAdapter(new MyPupilRecyclerViewAdapter(response1.getPupils(), mListener));
            }
        }

        @Override
        public void onFailure(Throwable t) {
            // Log error here since request failed
            Toast.makeText(getActivity(), "error", Toast.LENGTH_SHORT).show();
        }
    });
}

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        loadPupils();
        View view = inflater.inflate(R.layout.fragment_pupil_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }
            this.recyclerView = recyclerView;
        }
        return view;
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnListFragmentInteractionListener) {
            mListener = (OnListFragmentInteractionListener) context;
        } else {

            throw new RuntimeException(context.toString()
                    + " must implement OnListFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p/>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnListFragmentInteractionListener {
        // TODO: Update argument type and name
        void onListFragmentInteraction(Pupil pupil);
    }
}
