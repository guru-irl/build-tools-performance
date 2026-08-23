import React from 'react';
const LABEL_25439 = 'component_25439';
export function Component25439({ value = 25439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25439, 'data-value': derived.doubled }, children);
}
export default Component25439;
