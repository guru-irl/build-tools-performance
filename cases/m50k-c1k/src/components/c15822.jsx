import React from 'react';
const LABEL_15822 = 'component_15822';
export function Component15822({ value = 15822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15822, 'data-value': derived.doubled }, children);
}
export default Component15822;
