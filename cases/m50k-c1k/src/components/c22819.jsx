import React from 'react';
const LABEL_22819 = 'component_22819';
export function Component22819({ value = 22819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22819, 'data-value': derived.doubled }, children);
}
export default Component22819;
