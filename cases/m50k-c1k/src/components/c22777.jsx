import React from 'react';
const LABEL_22777 = 'component_22777';
export function Component22777({ value = 22777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22777, 'data-value': derived.doubled }, children);
}
export default Component22777;
