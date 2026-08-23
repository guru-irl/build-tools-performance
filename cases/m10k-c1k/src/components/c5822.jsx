import React from 'react';
const LABEL_5822 = 'component_5822';
export function Component5822({ value = 5822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5822, 'data-value': derived.doubled }, children);
}
export default Component5822;
