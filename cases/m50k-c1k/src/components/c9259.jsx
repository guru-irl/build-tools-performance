import React from 'react';
const LABEL_9259 = 'component_9259';
export function Component9259({ value = 9259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9259, 'data-value': derived.doubled }, children);
}
export default Component9259;
