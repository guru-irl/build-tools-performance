import React from 'react';
const LABEL_13737 = 'component_13737';
export function Component13737({ value = 13737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13737, 'data-value': derived.doubled }, children);
}
export default Component13737;
