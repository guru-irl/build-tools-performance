import React from 'react';
const LABEL_24151 = 'component_24151';
export function Component24151({ value = 24151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24151, 'data-value': derived.doubled }, children);
}
export default Component24151;
