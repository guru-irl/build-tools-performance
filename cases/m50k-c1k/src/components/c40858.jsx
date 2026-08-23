import React from 'react';
const LABEL_40858 = 'component_40858';
export function Component40858({ value = 40858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40858, 'data-value': derived.doubled }, children);
}
export default Component40858;
