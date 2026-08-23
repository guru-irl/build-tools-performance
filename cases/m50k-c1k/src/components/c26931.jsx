import React from 'react';
const LABEL_26931 = 'component_26931';
export function Component26931({ value = 26931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26931, 'data-value': derived.doubled }, children);
}
export default Component26931;
