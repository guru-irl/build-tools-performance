import React from 'react';
const LABEL_27824 = 'component_27824';
export function Component27824({ value = 27824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27824, 'data-value': derived.doubled }, children);
}
export default Component27824;
