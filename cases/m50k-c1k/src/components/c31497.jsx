import React from 'react';
const LABEL_31497 = 'component_31497';
export function Component31497({ value = 31497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31497, 'data-value': derived.doubled }, children);
}
export default Component31497;
