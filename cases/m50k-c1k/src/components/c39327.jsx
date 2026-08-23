import React from 'react';
const LABEL_39327 = 'component_39327';
export function Component39327({ value = 39327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39327, 'data-value': derived.doubled }, children);
}
export default Component39327;
