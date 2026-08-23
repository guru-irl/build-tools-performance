import React from 'react';
const LABEL_39630 = 'component_39630';
export function Component39630({ value = 39630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39630, 'data-value': derived.doubled }, children);
}
export default Component39630;
