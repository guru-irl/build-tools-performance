import React from 'react';
const LABEL_9314 = 'component_9314';
export function Component9314({ value = 9314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9314, 'data-value': derived.doubled }, children);
}
export default Component9314;
