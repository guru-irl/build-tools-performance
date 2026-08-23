import React from 'react';
const LABEL_9456 = 'component_9456';
export function Component9456({ value = 9456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9456, 'data-value': derived.doubled }, children);
}
export default Component9456;
