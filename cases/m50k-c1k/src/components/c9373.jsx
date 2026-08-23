import React from 'react';
const LABEL_9373 = 'component_9373';
export function Component9373({ value = 9373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9373, 'data-value': derived.doubled }, children);
}
export default Component9373;
