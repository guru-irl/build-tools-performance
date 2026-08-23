import React from 'react';
const LABEL_3063 = 'component_3063';
export function Component3063({ value = 3063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3063, 'data-value': derived.doubled }, children);
}
export default Component3063;
