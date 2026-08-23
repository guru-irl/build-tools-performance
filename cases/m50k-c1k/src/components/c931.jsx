import React from 'react';
const LABEL_931 = 'component_931';
export function Component931({ value = 931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_931, 'data-value': derived.doubled }, children);
}
export default Component931;
