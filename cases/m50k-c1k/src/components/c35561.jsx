import React from 'react';
const LABEL_35561 = 'component_35561';
export function Component35561({ value = 35561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35561, 'data-value': derived.doubled }, children);
}
export default Component35561;
