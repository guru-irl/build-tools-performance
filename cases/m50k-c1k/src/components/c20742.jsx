import React from 'react';
const LABEL_20742 = 'component_20742';
export function Component20742({ value = 20742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20742, 'data-value': derived.doubled }, children);
}
export default Component20742;
