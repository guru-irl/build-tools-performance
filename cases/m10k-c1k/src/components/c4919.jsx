import React from 'react';
const LABEL_4919 = 'component_4919';
export function Component4919({ value = 4919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4919, 'data-value': derived.doubled }, children);
}
export default Component4919;
