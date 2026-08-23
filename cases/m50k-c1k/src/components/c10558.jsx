import React from 'react';
const LABEL_10558 = 'component_10558';
export function Component10558({ value = 10558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10558, 'data-value': derived.doubled }, children);
}
export default Component10558;
