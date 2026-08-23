import React from 'react';
const LABEL_17591 = 'component_17591';
export function Component17591({ value = 17591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17591, 'data-value': derived.doubled }, children);
}
export default Component17591;
