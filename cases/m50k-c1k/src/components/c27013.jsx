import React from 'react';
const LABEL_27013 = 'component_27013';
export function Component27013({ value = 27013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27013, 'data-value': derived.doubled }, children);
}
export default Component27013;
