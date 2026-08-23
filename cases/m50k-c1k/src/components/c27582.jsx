import React from 'react';
const LABEL_27582 = 'component_27582';
export function Component27582({ value = 27582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27582, 'data-value': derived.doubled }, children);
}
export default Component27582;
