import React from 'react';
const LABEL_15439 = 'component_15439';
export function Component15439({ value = 15439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15439, 'data-value': derived.doubled }, children);
}
export default Component15439;
