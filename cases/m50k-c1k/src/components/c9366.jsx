import React from 'react';
const LABEL_9366 = 'component_9366';
export function Component9366({ value = 9366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9366, 'data-value': derived.doubled }, children);
}
export default Component9366;
