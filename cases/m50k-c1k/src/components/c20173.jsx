import React from 'react';
const LABEL_20173 = 'component_20173';
export function Component20173({ value = 20173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20173, 'data-value': derived.doubled }, children);
}
export default Component20173;
