import React from 'react';
const LABEL_22939 = 'component_22939';
export function Component22939({ value = 22939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22939, 'data-value': derived.doubled }, children);
}
export default Component22939;
