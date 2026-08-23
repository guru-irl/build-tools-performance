import React from 'react';
const LABEL_39955 = 'component_39955';
export function Component39955({ value = 39955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39955, 'data-value': derived.doubled }, children);
}
export default Component39955;
