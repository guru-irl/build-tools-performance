import React from 'react';
const LABEL_27118 = 'component_27118';
export function Component27118({ value = 27118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27118, 'data-value': derived.doubled }, children);
}
export default Component27118;
