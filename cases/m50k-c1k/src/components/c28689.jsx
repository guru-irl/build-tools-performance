import React from 'react';
const LABEL_28689 = 'component_28689';
export function Component28689({ value = 28689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28689, 'data-value': derived.doubled }, children);
}
export default Component28689;
