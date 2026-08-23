import React from 'react';
const LABEL_17030 = 'component_17030';
export function Component17030({ value = 17030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17030, 'data-value': derived.doubled }, children);
}
export default Component17030;
