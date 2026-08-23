import React from 'react';
const LABEL_42822 = 'component_42822';
export function Component42822({ value = 42822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42822, 'data-value': derived.doubled }, children);
}
export default Component42822;
