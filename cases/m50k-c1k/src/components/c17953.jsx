import React from 'react';
const LABEL_17953 = 'component_17953';
export function Component17953({ value = 17953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17953, 'data-value': derived.doubled }, children);
}
export default Component17953;
