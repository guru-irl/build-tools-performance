import React from 'react';
const LABEL_28439 = 'component_28439';
export function Component28439({ value = 28439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28439, 'data-value': derived.doubled }, children);
}
export default Component28439;
