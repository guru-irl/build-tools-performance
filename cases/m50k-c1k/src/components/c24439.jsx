import React from 'react';
const LABEL_24439 = 'component_24439';
export function Component24439({ value = 24439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24439, 'data-value': derived.doubled }, children);
}
export default Component24439;
