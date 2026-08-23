import React from 'react';
const LABEL_42053 = 'component_42053';
export function Component42053({ value = 42053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42053, 'data-value': derived.doubled }, children);
}
export default Component42053;
