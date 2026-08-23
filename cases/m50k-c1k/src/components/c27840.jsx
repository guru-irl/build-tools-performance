import React from 'react';
const LABEL_27840 = 'component_27840';
export function Component27840({ value = 27840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27840, 'data-value': derived.doubled }, children);
}
export default Component27840;
