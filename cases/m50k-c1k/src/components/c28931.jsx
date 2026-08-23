import React from 'react';
const LABEL_28931 = 'component_28931';
export function Component28931({ value = 28931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28931, 'data-value': derived.doubled }, children);
}
export default Component28931;
