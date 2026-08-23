import React from 'react';
const LABEL_27625 = 'component_27625';
export function Component27625({ value = 27625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27625, 'data-value': derived.doubled }, children);
}
export default Component27625;
