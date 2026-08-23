import React from 'react';
const LABEL_9371 = 'component_9371';
export function Component9371({ value = 9371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9371, 'data-value': derived.doubled }, children);
}
export default Component9371;
