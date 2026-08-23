import React from 'react';
const LABEL_17870 = 'component_17870';
export function Component17870({ value = 17870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17870, 'data-value': derived.doubled }, children);
}
export default Component17870;
