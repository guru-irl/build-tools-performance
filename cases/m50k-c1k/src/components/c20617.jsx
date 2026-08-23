import React from 'react';
const LABEL_20617 = 'component_20617';
export function Component20617({ value = 20617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20617, 'data-value': derived.doubled }, children);
}
export default Component20617;
