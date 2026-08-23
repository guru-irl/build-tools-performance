import React from 'react';
const LABEL_1823 = 'component_1823';
export function Component1823({ value = 1823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1823, 'data-value': derived.doubled }, children);
}
export default Component1823;
