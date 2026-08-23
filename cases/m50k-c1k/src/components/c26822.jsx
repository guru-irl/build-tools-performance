import React from 'react';
const LABEL_26822 = 'component_26822';
export function Component26822({ value = 26822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26822, 'data-value': derived.doubled }, children);
}
export default Component26822;
