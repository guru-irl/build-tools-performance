import React from 'react';
const LABEL_29242 = 'component_29242';
export function Component29242({ value = 29242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29242, 'data-value': derived.doubled }, children);
}
export default Component29242;
