import React from 'react';
const LABEL_2823 = 'component_2823';
export function Component2823({ value = 2823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2823, 'data-value': derived.doubled }, children);
}
export default Component2823;
