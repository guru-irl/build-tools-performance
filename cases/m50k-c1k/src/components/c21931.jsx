import React from 'react';
const LABEL_21931 = 'component_21931';
export function Component21931({ value = 21931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21931, 'data-value': derived.doubled }, children);
}
export default Component21931;
