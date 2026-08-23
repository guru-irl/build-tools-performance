import React from 'react';
const LABEL_37559 = 'component_37559';
export function Component37559({ value = 37559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37559, 'data-value': derived.doubled }, children);
}
export default Component37559;
