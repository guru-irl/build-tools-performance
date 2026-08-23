import React from 'react';
const LABEL_39669 = 'component_39669';
export function Component39669({ value = 39669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39669, 'data-value': derived.doubled }, children);
}
export default Component39669;
