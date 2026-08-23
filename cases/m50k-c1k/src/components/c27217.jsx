import React from 'react';
const LABEL_27217 = 'component_27217';
export function Component27217({ value = 27217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27217, 'data-value': derived.doubled }, children);
}
export default Component27217;
