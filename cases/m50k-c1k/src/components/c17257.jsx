import React from 'react';
const LABEL_17257 = 'component_17257';
export function Component17257({ value = 17257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17257, 'data-value': derived.doubled }, children);
}
export default Component17257;
