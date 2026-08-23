import React from 'react';
const LABEL_822 = 'component_822';
export function Component822({ value = 822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_822, 'data-value': derived.doubled }, children);
}
export default Component822;
