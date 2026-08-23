import React from 'react';
const LABEL_17945 = 'component_17945';
export function Component17945({ value = 17945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17945, 'data-value': derived.doubled }, children);
}
export default Component17945;
