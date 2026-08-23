import React from 'react';
const LABEL_39708 = 'component_39708';
export function Component39708({ value = 39708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39708, 'data-value': derived.doubled }, children);
}
export default Component39708;
