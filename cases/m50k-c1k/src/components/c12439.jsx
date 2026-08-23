import React from 'react';
const LABEL_12439 = 'component_12439';
export function Component12439({ value = 12439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12439, 'data-value': derived.doubled }, children);
}
export default Component12439;
