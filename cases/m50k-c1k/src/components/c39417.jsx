import React from 'react';
const LABEL_39417 = 'component_39417';
export function Component39417({ value = 39417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39417, 'data-value': derived.doubled }, children);
}
export default Component39417;
