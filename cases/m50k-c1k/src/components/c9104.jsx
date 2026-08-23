import React from 'react';
const LABEL_9104 = 'component_9104';
export function Component9104({ value = 9104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9104, 'data-value': derived.doubled }, children);
}
export default Component9104;
