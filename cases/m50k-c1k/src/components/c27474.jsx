import React from 'react';
const LABEL_27474 = 'component_27474';
export function Component27474({ value = 27474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27474, 'data-value': derived.doubled }, children);
}
export default Component27474;
