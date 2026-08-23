import React from 'react';
const LABEL_7439 = 'component_7439';
export function Component7439({ value = 7439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7439, 'data-value': derived.doubled }, children);
}
export default Component7439;
