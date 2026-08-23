import React from 'react';
const LABEL_33931 = 'component_33931';
export function Component33931({ value = 33931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33931, 'data-value': derived.doubled }, children);
}
export default Component33931;
