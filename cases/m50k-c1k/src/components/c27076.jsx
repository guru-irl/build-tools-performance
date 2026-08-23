import React from 'react';
const LABEL_27076 = 'component_27076';
export function Component27076({ value = 27076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27076, 'data-value': derived.doubled }, children);
}
export default Component27076;
