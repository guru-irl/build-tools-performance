import React from 'react';
const LABEL_23577 = 'component_23577';
export function Component23577({ value = 23577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23577, 'data-value': derived.doubled }, children);
}
export default Component23577;
