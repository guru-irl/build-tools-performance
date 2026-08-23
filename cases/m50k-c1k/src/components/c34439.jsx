import React from 'react';
const LABEL_34439 = 'component_34439';
export function Component34439({ value = 34439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34439, 'data-value': derived.doubled }, children);
}
export default Component34439;
