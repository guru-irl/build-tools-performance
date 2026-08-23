import React from 'react';
const LABEL_24510 = 'component_24510';
export function Component24510({ value = 24510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24510, 'data-value': derived.doubled }, children);
}
export default Component24510;
