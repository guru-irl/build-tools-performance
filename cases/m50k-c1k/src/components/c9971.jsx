import React from 'react';
const LABEL_9971 = 'component_9971';
export function Component9971({ value = 9971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9971, 'data-value': derived.doubled }, children);
}
export default Component9971;
