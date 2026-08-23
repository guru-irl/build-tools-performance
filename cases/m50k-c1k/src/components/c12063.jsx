import React from 'react';
const LABEL_12063 = 'component_12063';
export function Component12063({ value = 12063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12063, 'data-value': derived.doubled }, children);
}
export default Component12063;
