import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Incident } from '../types/incident';
import { mockIncidents } from '../data/mockIncidents';

interface IncidentState {
  incidents: Incident[];
}

const initialState: IncidentState = {
  incidents: mockIncidents,
};

export const incidentSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    addIncident: (state, action: PayloadAction<Omit<Incident, "id">>) => {
      const newId = Math.max(0, ...state.incidents.map(i => i.id)) + 1;
      state.incidents.unshift({ ...action.payload, id: newId });
    },
  },
});

export const { addIncident } = incidentSlice.actions;
export default incidentSlice.reducer;
