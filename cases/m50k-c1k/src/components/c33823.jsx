import React from 'react';
const LABEL_33823 = 'component_33823';
export function Component33823({ value = 33823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33823, 'data-value': derived.doubled }, children);
}
export default Component33823;
