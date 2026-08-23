import React from 'react';
const LABEL_32236 = 'component_32236';
export function Component32236({ value = 32236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32236, 'data-value': derived.doubled }, children);
}
export default Component32236;
