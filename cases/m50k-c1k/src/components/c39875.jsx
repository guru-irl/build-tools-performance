import React from 'react';
const LABEL_39875 = 'component_39875';
export function Component39875({ value = 39875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39875, 'data-value': derived.doubled }, children);
}
export default Component39875;
