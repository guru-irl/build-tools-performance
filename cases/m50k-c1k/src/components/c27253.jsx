import React from 'react';
const LABEL_27253 = 'component_27253';
export function Component27253({ value = 27253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27253, 'data-value': derived.doubled }, children);
}
export default Component27253;
