import React from 'react';
const LABEL_11557 = 'component_11557';
export function Component11557({ value = 11557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11557, 'data-value': derived.doubled }, children);
}
export default Component11557;
