import React from 'react';
const LABEL_24633 = 'component_24633';
export function Component24633({ value = 24633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24633, 'data-value': derived.doubled }, children);
}
export default Component24633;
