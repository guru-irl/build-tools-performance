import React from 'react';
const LABEL_17924 = 'component_17924';
export function Component17924({ value = 17924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17924, 'data-value': derived.doubled }, children);
}
export default Component17924;
