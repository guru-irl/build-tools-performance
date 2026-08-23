import React from 'react';
const LABEL_17884 = 'component_17884';
export function Component17884({ value = 17884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17884, 'data-value': derived.doubled }, children);
}
export default Component17884;
