import React from 'react';
const LABEL_39833 = 'component_39833';
export function Component39833({ value = 39833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39833, 'data-value': derived.doubled }, children);
}
export default Component39833;
