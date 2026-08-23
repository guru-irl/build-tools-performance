import React from 'react';
const LABEL_32517 = 'component_32517';
export function Component32517({ value = 32517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32517, 'data-value': derived.doubled }, children);
}
export default Component32517;
