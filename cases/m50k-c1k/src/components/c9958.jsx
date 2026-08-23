import React from 'react';
const LABEL_9958 = 'component_9958';
export function Component9958({ value = 9958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9958, 'data-value': derived.doubled }, children);
}
export default Component9958;
