import React from 'react';
const LABEL_7771 = 'component_7771';
export function Component7771({ value = 7771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7771, 'data-value': derived.doubled }, children);
}
export default Component7771;
