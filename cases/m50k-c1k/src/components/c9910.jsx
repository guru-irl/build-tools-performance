import React from 'react';
const LABEL_9910 = 'component_9910';
export function Component9910({ value = 9910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9910, 'data-value': derived.doubled }, children);
}
export default Component9910;
