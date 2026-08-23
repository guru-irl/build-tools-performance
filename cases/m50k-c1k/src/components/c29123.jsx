import React from 'react';
const LABEL_29123 = 'component_29123';
export function Component29123({ value = 29123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29123, 'data-value': derived.doubled }, children);
}
export default Component29123;
