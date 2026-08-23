import React from 'react';
const LABEL_35751 = 'component_35751';
export function Component35751({ value = 35751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35751, 'data-value': derived.doubled }, children);
}
export default Component35751;
