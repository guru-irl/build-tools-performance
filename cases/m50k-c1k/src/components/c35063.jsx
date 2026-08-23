import React from 'react';
const LABEL_35063 = 'component_35063';
export function Component35063({ value = 35063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35063, 'data-value': derived.doubled }, children);
}
export default Component35063;
