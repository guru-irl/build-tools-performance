import React from 'react';
const LABEL_27244 = 'component_27244';
export function Component27244({ value = 27244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27244, 'data-value': derived.doubled }, children);
}
export default Component27244;
