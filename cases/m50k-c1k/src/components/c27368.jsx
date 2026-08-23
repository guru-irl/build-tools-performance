import React from 'react';
const LABEL_27368 = 'component_27368';
export function Component27368({ value = 27368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27368, 'data-value': derived.doubled }, children);
}
export default Component27368;
