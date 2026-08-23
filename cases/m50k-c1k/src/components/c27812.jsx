import React from 'react';
const LABEL_27812 = 'component_27812';
export function Component27812({ value = 27812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27812, 'data-value': derived.doubled }, children);
}
export default Component27812;
