import React from 'react';
const LABEL_23153 = 'component_23153';
export function Component23153({ value = 23153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23153, 'data-value': derived.doubled }, children);
}
export default Component23153;
