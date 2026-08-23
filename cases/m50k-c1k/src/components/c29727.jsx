import React from 'react';
const LABEL_29727 = 'component_29727';
export function Component29727({ value = 29727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29727, 'data-value': derived.doubled }, children);
}
export default Component29727;
