import React from 'react';
const LABEL_27588 = 'component_27588';
export function Component27588({ value = 27588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27588, 'data-value': derived.doubled }, children);
}
export default Component27588;
