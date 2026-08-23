import React from 'react';
const LABEL_23872 = 'component_23872';
export function Component23872({ value = 23872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23872, 'data-value': derived.doubled }, children);
}
export default Component23872;
