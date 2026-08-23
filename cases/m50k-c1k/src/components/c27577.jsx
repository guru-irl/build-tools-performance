import React from 'react';
const LABEL_27577 = 'component_27577';
export function Component27577({ value = 27577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27577, 'data-value': derived.doubled }, children);
}
export default Component27577;
