import React from 'react';
const LABEL_17744 = 'component_17744';
export function Component17744({ value = 17744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17744, 'data-value': derived.doubled }, children);
}
export default Component17744;
