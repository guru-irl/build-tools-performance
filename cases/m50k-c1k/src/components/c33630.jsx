import React from 'react';
const LABEL_33630 = 'component_33630';
export function Component33630({ value = 33630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33630, 'data-value': derived.doubled }, children);
}
export default Component33630;
