import React from 'react';
const LABEL_34101 = 'component_34101';
export function Component34101({ value = 34101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34101, 'data-value': derived.doubled }, children);
}
export default Component34101;
