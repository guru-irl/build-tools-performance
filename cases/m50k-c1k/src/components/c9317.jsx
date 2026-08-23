import React from 'react';
const LABEL_9317 = 'component_9317';
export function Component9317({ value = 9317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9317, 'data-value': derived.doubled }, children);
}
export default Component9317;
