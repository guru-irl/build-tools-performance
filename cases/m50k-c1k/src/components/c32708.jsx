import React from 'react';
const LABEL_32708 = 'component_32708';
export function Component32708({ value = 32708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32708, 'data-value': derived.doubled }, children);
}
export default Component32708;
