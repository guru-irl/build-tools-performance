import React from 'react';
const LABEL_43822 = 'component_43822';
export function Component43822({ value = 43822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43822, 'data-value': derived.doubled }, children);
}
export default Component43822;
