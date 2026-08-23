import React from 'react';
const LABEL_46439 = 'component_46439';
export function Component46439({ value = 46439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46439, 'data-value': derived.doubled }, children);
}
export default Component46439;
