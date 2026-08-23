import React from 'react';
const LABEL_28456 = 'component_28456';
export function Component28456({ value = 28456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28456, 'data-value': derived.doubled }, children);
}
export default Component28456;
