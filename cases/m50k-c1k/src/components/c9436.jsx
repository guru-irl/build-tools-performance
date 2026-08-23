import React from 'react';
const LABEL_9436 = 'component_9436';
export function Component9436({ value = 9436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9436, 'data-value': derived.doubled }, children);
}
export default Component9436;
