import React from 'react';
const LABEL_37794 = 'component_37794';
export function Component37794({ value = 37794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37794, 'data-value': derived.doubled }, children);
}
export default Component37794;
