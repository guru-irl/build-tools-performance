import React from 'react';
const LABEL_42273 = 'component_42273';
export function Component42273({ value = 42273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42273, 'data-value': derived.doubled }, children);
}
export default Component42273;
