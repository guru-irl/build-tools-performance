import React from 'react';
const LABEL_27635 = 'component_27635';
export function Component27635({ value = 27635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27635, 'data-value': derived.doubled }, children);
}
export default Component27635;
