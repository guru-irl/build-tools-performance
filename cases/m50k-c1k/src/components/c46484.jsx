import React from 'react';
const LABEL_46484 = 'component_46484';
export function Component46484({ value = 46484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46484, 'data-value': derived.doubled }, children);
}
export default Component46484;
