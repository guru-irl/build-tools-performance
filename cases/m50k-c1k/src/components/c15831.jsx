import React from 'react';
const LABEL_15831 = 'component_15831';
export function Component15831({ value = 15831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15831, 'data-value': derived.doubled }, children);
}
export default Component15831;
