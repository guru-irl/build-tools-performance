import React from 'react';
const LABEL_21327 = 'component_21327';
export function Component21327({ value = 21327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21327, 'data-value': derived.doubled }, children);
}
export default Component21327;
