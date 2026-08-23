import React from 'react';
const LABEL_7469 = 'component_7469';
export function Component7469({ value = 7469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7469, 'data-value': derived.doubled }, children);
}
export default Component7469;
