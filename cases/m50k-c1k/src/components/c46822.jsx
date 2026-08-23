import React from 'react';
const LABEL_46822 = 'component_46822';
export function Component46822({ value = 46822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46822, 'data-value': derived.doubled }, children);
}
export default Component46822;
