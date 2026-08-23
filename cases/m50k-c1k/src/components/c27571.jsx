import React from 'react';
const LABEL_27571 = 'component_27571';
export function Component27571({ value = 27571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27571, 'data-value': derived.doubled }, children);
}
export default Component27571;
