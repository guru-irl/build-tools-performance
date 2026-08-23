import React from 'react';
const LABEL_22214 = 'component_22214';
export function Component22214({ value = 22214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22214, 'data-value': derived.doubled }, children);
}
export default Component22214;
