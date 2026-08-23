import React from 'react';
const LABEL_38822 = 'component_38822';
export function Component38822({ value = 38822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38822, 'data-value': derived.doubled }, children);
}
export default Component38822;
