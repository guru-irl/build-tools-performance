import React from 'react';
const LABEL_27771 = 'component_27771';
export function Component27771({ value = 27771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27771, 'data-value': derived.doubled }, children);
}
export default Component27771;
