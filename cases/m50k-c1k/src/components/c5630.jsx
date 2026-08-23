import React from 'react';
const LABEL_5630 = 'component_5630';
export function Component5630({ value = 5630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5630, 'data-value': derived.doubled }, children);
}
export default Component5630;
