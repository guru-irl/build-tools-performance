import React from 'react';
const LABEL_24822 = 'component_24822';
export function Component24822({ value = 24822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24822, 'data-value': derived.doubled }, children);
}
export default Component24822;
