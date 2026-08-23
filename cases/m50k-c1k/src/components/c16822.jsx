import React from 'react';
const LABEL_16822 = 'component_16822';
export function Component16822({ value = 16822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16822, 'data-value': derived.doubled }, children);
}
export default Component16822;
