import React from 'react';
const LABEL_20291 = 'component_20291';
export function Component20291({ value = 20291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20291, 'data-value': derived.doubled }, children);
}
export default Component20291;
