import React from 'react';
const LABEL_9954 = 'component_9954';
export function Component9954({ value = 9954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9954, 'data-value': derived.doubled }, children);
}
export default Component9954;
