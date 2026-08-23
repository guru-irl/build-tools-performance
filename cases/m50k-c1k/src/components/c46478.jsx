import React from 'react';
const LABEL_46478 = 'component_46478';
export function Component46478({ value = 46478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46478, 'data-value': derived.doubled }, children);
}
export default Component46478;
