import React from 'react';
const LABEL_15012 = 'component_15012';
export function Component15012({ value = 15012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15012, 'data-value': derived.doubled }, children);
}
export default Component15012;
