import { createSelector } from "reselect";

import orm from "app/schema";

export const selectEntities = data => data.entities;

export const getEntitiesSession = createSelector(
    selectEntities,
    entities => orm.session(entities)
);


export const getUnsharedEntitiesSession = (state) => {
    const entities = selectEntities(state);
    return orm.session(entities);
} 