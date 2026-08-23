import React from 'react';
const LABEL_9538 = 'component_9538';
export function Component9538({ value = 9538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9538, 'data-value': derived.doubled }, children);
}
export default Component9538;
