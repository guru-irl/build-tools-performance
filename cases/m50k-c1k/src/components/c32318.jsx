import React from 'react';
const LABEL_32318 = 'component_32318';
export function Component32318({ value = 32318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32318, 'data-value': derived.doubled }, children);
}
export default Component32318;
