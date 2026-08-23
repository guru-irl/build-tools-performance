import React from 'react';
const LABEL_9340 = 'component_9340';
export function Component9340({ value = 9340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9340, 'data-value': derived.doubled }, children);
}
export default Component9340;
