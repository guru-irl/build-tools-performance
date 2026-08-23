import React from 'react';
const LABEL_27091 = 'component_27091';
export function Component27091({ value = 27091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27091, 'data-value': derived.doubled }, children);
}
export default Component27091;
