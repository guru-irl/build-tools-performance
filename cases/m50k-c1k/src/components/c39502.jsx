import React from 'react';
const LABEL_39502 = 'component_39502';
export function Component39502({ value = 39502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39502, 'data-value': derived.doubled }, children);
}
export default Component39502;
