import React from 'react';
const LABEL_14822 = 'component_14822';
export function Component14822({ value = 14822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14822, 'data-value': derived.doubled }, children);
}
export default Component14822;
