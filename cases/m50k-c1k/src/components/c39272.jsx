import React from 'react';
const LABEL_39272 = 'component_39272';
export function Component39272({ value = 39272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39272, 'data-value': derived.doubled }, children);
}
export default Component39272;
