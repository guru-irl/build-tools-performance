import React from 'react';
const LABEL_22131 = 'component_22131';
export function Component22131({ value = 22131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22131, 'data-value': derived.doubled }, children);
}
export default Component22131;
