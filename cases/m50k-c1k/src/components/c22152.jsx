import React from 'react';
const LABEL_22152 = 'component_22152';
export function Component22152({ value = 22152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22152, 'data-value': derived.doubled }, children);
}
export default Component22152;
