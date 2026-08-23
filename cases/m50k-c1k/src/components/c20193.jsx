import React from 'react';
const LABEL_20193 = 'component_20193';
export function Component20193({ value = 20193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20193, 'data-value': derived.doubled }, children);
}
export default Component20193;
