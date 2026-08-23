import React from 'react';
const LABEL_32588 = 'component_32588';
export function Component32588({ value = 32588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32588, 'data-value': derived.doubled }, children);
}
export default Component32588;
