import React from 'react';
const LABEL_4822 = 'component_4822';
export function Component4822({ value = 4822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4822, 'data-value': derived.doubled }, children);
}
export default Component4822;
