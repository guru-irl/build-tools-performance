import React from 'react';
const LABEL_32469 = 'component_32469';
export function Component32469({ value = 32469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32469, 'data-value': derived.doubled }, children);
}
export default Component32469;
