import React from 'react';
const LABEL_42823 = 'component_42823';
export function Component42823({ value = 42823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42823, 'data-value': derived.doubled }, children);
}
export default Component42823;
