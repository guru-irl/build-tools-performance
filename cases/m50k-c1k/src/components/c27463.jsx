import React from 'react';
const LABEL_27463 = 'component_27463';
export function Component27463({ value = 27463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27463, 'data-value': derived.doubled }, children);
}
export default Component27463;
