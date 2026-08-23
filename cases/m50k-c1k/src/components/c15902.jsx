import React from 'react';
const LABEL_15902 = 'component_15902';
export function Component15902({ value = 15902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15902, 'data-value': derived.doubled }, children);
}
export default Component15902;
