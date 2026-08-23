import React from 'react';
const LABEL_42198 = 'component_42198';
export function Component42198({ value = 42198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42198, 'data-value': derived.doubled }, children);
}
export default Component42198;
