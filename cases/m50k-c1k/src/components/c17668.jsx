import React from 'react';
const LABEL_17668 = 'component_17668';
export function Component17668({ value = 17668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17668, 'data-value': derived.doubled }, children);
}
export default Component17668;
