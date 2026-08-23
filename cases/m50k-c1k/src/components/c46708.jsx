import React from 'react';
const LABEL_46708 = 'component_46708';
export function Component46708({ value = 46708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46708, 'data-value': derived.doubled }, children);
}
export default Component46708;
