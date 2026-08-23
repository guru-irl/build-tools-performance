import React from 'react';
const LABEL_29152 = 'component_29152';
export function Component29152({ value = 29152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29152, 'data-value': derived.doubled }, children);
}
export default Component29152;
