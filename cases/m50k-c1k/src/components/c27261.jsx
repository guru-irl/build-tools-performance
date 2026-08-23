import React from 'react';
const LABEL_27261 = 'component_27261';
export function Component27261({ value = 27261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27261, 'data-value': derived.doubled }, children);
}
export default Component27261;
