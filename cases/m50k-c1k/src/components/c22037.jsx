import React from 'react';
const LABEL_22037 = 'component_22037';
export function Component22037({ value = 22037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22037, 'data-value': derived.doubled }, children);
}
export default Component22037;
