import React from 'react';
const LABEL_27059 = 'component_27059';
export function Component27059({ value = 27059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27059, 'data-value': derived.doubled }, children);
}
export default Component27059;
