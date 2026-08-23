import React from 'react';
const LABEL_17974 = 'component_17974';
export function Component17974({ value = 17974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17974, 'data-value': derived.doubled }, children);
}
export default Component17974;
