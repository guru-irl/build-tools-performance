import React from 'react';
const LABEL_9390 = 'component_9390';
export function Component9390({ value = 9390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9390, 'data-value': derived.doubled }, children);
}
export default Component9390;
