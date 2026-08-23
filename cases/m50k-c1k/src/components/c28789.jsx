import React from 'react';
const LABEL_28789 = 'component_28789';
export function Component28789({ value = 28789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28789, 'data-value': derived.doubled }, children);
}
export default Component28789;
