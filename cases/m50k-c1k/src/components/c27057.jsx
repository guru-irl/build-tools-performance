import React from 'react';
const LABEL_27057 = 'component_27057';
export function Component27057({ value = 27057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27057, 'data-value': derived.doubled }, children);
}
export default Component27057;
