import React from 'react';
const LABEL_9066 = 'component_9066';
export function Component9066({ value = 9066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9066, 'data-value': derived.doubled }, children);
}
export default Component9066;
