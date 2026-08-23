import React from 'react';
const LABEL_3327 = 'component_3327';
export function Component3327({ value = 3327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3327, 'data-value': derived.doubled }, children);
}
export default Component3327;
