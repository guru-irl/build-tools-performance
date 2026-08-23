import React from 'react';
const LABEL_6822 = 'component_6822';
export function Component6822({ value = 6822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6822, 'data-value': derived.doubled }, children);
}
export default Component6822;
