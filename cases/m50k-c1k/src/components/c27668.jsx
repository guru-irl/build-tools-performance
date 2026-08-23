import React from 'react';
const LABEL_27668 = 'component_27668';
export function Component27668({ value = 27668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27668, 'data-value': derived.doubled }, children);
}
export default Component27668;
