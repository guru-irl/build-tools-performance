import React from 'react';
const LABEL_34193 = 'component_34193';
export function Component34193({ value = 34193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34193, 'data-value': derived.doubled }, children);
}
export default Component34193;
