import React from 'react';
const LABEL_30439 = 'component_30439';
export function Component30439({ value = 30439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30439, 'data-value': derived.doubled }, children);
}
export default Component30439;
