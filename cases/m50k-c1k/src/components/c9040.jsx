import React from 'react';
const LABEL_9040 = 'component_9040';
export function Component9040({ value = 9040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9040, 'data-value': derived.doubled }, children);
}
export default Component9040;
