import React from 'react';
const LABEL_30426 = 'component_30426';
export function Component30426({ value = 30426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30426, 'data-value': derived.doubled }, children);
}
export default Component30426;
