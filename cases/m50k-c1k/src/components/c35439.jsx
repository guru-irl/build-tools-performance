import React from 'react';
const LABEL_35439 = 'component_35439';
export function Component35439({ value = 35439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35439, 'data-value': derived.doubled }, children);
}
export default Component35439;
