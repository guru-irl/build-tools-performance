import React from 'react';
const LABEL_22718 = 'component_22718';
export function Component22718({ value = 22718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22718, 'data-value': derived.doubled }, children);
}
export default Component22718;
