import React from 'react';
const LABEL_17877 = 'component_17877';
export function Component17877({ value = 17877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17877, 'data-value': derived.doubled }, children);
}
export default Component17877;
