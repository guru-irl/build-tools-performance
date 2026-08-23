import React from 'react';
const LABEL_27258 = 'component_27258';
export function Component27258({ value = 27258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27258, 'data-value': derived.doubled }, children);
}
export default Component27258;
