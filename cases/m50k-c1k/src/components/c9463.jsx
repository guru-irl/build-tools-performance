import React from 'react';
const LABEL_9463 = 'component_9463';
export function Component9463({ value = 9463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9463, 'data-value': derived.doubled }, children);
}
export default Component9463;
