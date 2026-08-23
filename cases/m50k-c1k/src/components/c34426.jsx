import React from 'react';
const LABEL_34426 = 'component_34426';
export function Component34426({ value = 34426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34426, 'data-value': derived.doubled }, children);
}
export default Component34426;
