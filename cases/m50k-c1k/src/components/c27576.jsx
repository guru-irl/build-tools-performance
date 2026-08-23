import React from 'react';
const LABEL_27576 = 'component_27576';
export function Component27576({ value = 27576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27576, 'data-value': derived.doubled }, children);
}
export default Component27576;
