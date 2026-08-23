import React from 'react';
const LABEL_12931 = 'component_12931';
export function Component12931({ value = 12931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12931, 'data-value': derived.doubled }, children);
}
export default Component12931;
