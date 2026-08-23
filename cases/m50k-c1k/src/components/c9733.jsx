import React from 'react';
const LABEL_9733 = 'component_9733';
export function Component9733({ value = 9733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9733, 'data-value': derived.doubled }, children);
}
export default Component9733;
