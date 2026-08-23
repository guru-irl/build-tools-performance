import React from 'react';
const LABEL_12786 = 'component_12786';
export function Component12786({ value = 12786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12786, 'data-value': derived.doubled }, children);
}
export default Component12786;
