import React from 'react';
const LABEL_9872 = 'component_9872';
export function Component9872({ value = 9872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9872, 'data-value': derived.doubled }, children);
}
export default Component9872;
