import React from 'react';
const LABEL_30558 = 'component_30558';
export function Component30558({ value = 30558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30558, 'data-value': derived.doubled }, children);
}
export default Component30558;
