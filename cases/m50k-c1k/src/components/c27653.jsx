import React from 'react';
const LABEL_27653 = 'component_27653';
export function Component27653({ value = 27653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27653, 'data-value': derived.doubled }, children);
}
export default Component27653;
