import React from 'react';
const LABEL_24266 = 'component_24266';
export function Component24266({ value = 24266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24266, 'data-value': derived.doubled }, children);
}
export default Component24266;
