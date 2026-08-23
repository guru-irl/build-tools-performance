import React from 'react';
const LABEL_46152 = 'component_46152';
export function Component46152({ value = 46152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46152, 'data-value': derived.doubled }, children);
}
export default Component46152;
