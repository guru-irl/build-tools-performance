import React from 'react';
const LABEL_15806 = 'component_15806';
export function Component15806({ value = 15806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15806, 'data-value': derived.doubled }, children);
}
export default Component15806;
