import React from 'react';
const LABEL_35075 = 'component_35075';
export function Component35075({ value = 35075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35075, 'data-value': derived.doubled }, children);
}
export default Component35075;
