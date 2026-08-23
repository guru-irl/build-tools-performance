import React from 'react';
const LABEL_29203 = 'component_29203';
export function Component29203({ value = 29203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29203, 'data-value': derived.doubled }, children);
}
export default Component29203;
