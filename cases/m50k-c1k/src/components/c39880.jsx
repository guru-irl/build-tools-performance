import React from 'react';
const LABEL_39880 = 'component_39880';
export function Component39880({ value = 39880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39880, 'data-value': derived.doubled }, children);
}
export default Component39880;
