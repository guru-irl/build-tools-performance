import React from 'react';
const LABEL_33140 = 'component_33140';
export function Component33140({ value = 33140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33140, 'data-value': derived.doubled }, children);
}
export default Component33140;
