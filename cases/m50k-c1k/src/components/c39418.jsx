import React from 'react';
const LABEL_39418 = 'component_39418';
export function Component39418({ value = 39418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39418, 'data-value': derived.doubled }, children);
}
export default Component39418;
