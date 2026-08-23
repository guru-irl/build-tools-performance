import React from 'react';
const LABEL_12251 = 'component_12251';
export function Component12251({ value = 12251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12251, 'data-value': derived.doubled }, children);
}
export default Component12251;
