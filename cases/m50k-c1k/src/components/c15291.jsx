import React from 'react';
const LABEL_15291 = 'component_15291';
export function Component15291({ value = 15291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15291, 'data-value': derived.doubled }, children);
}
export default Component15291;
