import React from 'react';
const LABEL_27769 = 'component_27769';
export function Component27769({ value = 27769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27769, 'data-value': derived.doubled }, children);
}
export default Component27769;
