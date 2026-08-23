import React from 'react';
const LABEL_20327 = 'component_20327';
export function Component20327({ value = 20327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20327, 'data-value': derived.doubled }, children);
}
export default Component20327;
