import React from 'react';
const LABEL_6327 = 'component_6327';
export function Component6327({ value = 6327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6327, 'data-value': derived.doubled }, children);
}
export default Component6327;
