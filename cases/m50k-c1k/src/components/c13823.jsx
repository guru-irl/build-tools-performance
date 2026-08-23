import React from 'react';
const LABEL_13823 = 'component_13823';
export function Component13823({ value = 13823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13823, 'data-value': derived.doubled }, children);
}
export default Component13823;
