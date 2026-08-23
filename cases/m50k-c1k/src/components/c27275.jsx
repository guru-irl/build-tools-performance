import React from 'react';
const LABEL_27275 = 'component_27275';
export function Component27275({ value = 27275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27275, 'data-value': derived.doubled }, children);
}
export default Component27275;
