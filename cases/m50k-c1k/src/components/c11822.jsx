import React from 'react';
const LABEL_11822 = 'component_11822';
export function Component11822({ value = 11822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11822, 'data-value': derived.doubled }, children);
}
export default Component11822;
