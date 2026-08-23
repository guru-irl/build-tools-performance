import React from 'react';
const LABEL_9956 = 'component_9956';
export function Component9956({ value = 9956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9956, 'data-value': derived.doubled }, children);
}
export default Component9956;
