import React from 'react';
const LABEL_537 = 'component_537';
export function Component537({ value = 537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_537, 'data-value': derived.doubled }, children);
}
export default Component537;
