import React from 'react';
const LABEL_9164 = 'component_9164';
export function Component9164({ value = 9164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9164, 'data-value': derived.doubled }, children);
}
export default Component9164;
