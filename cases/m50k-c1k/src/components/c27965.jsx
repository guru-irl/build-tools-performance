import React from 'react';
const LABEL_27965 = 'component_27965';
export function Component27965({ value = 27965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27965, 'data-value': derived.doubled }, children);
}
export default Component27965;
