// redux/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dashboard from "./dashboard.json"

const initialState = dashboard

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const category = state.categories.find(cat => cat.id === action.payload.categoryId);
            if (category) {
                category.widgets.push(action.payload.widget);
            }
        },
        removeWidget: (state, action) => {
            const category = state.categories.find(cat => cat.id === action.payload.categoryId);
            if (category) {
                category.widgets = category.widgets.filter(widget => widget.id !== action.payload.widgetId);
            }
        },
        searchWidgets: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});

export const { addWidget, removeWidget, searchWidgets } = dashboardSlice.actions;

export default dashboardSlice.reducer;
