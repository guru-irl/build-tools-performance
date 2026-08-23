import React from 'react';
const LABEL_24981 = 'component_24981';
export function Component24981({ value = 24981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24981, 'data-value': derived.doubled }, children);
}
export default Component24981;
