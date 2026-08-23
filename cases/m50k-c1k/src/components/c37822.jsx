import React from 'react';
const LABEL_37822 = 'component_37822';
export function Component37822({ value = 37822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37822, 'data-value': derived.doubled }, children);
}
export default Component37822;
