import React from 'react';
const LABEL_9643 = 'component_9643';
export function Component9643({ value = 9643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9643, 'data-value': derived.doubled }, children);
}
export default Component9643;
