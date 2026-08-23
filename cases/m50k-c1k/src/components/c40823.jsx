import React from 'react';
const LABEL_40823 = 'component_40823';
export function Component40823({ value = 40823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40823, 'data-value': derived.doubled }, children);
}
export default Component40823;
