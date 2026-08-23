import React from 'react';
const LABEL_17813 = 'component_17813';
export function Component17813({ value = 17813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17813, 'data-value': derived.doubled }, children);
}
export default Component17813;
