import React from 'react';
const LABEL_16975 = 'component_16975';
export function Component16975({ value = 16975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16975, 'data-value': derived.doubled }, children);
}
export default Component16975;
