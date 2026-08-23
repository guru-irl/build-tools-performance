import React from 'react';
const LABEL_20124 = 'component_20124';
export function Component20124({ value = 20124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20124, 'data-value': derived.doubled }, children);
}
export default Component20124;
