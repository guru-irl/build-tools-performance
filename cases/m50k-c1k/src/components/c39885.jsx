import React from 'react';
const LABEL_39885 = 'component_39885';
export function Component39885({ value = 39885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39885, 'data-value': derived.doubled }, children);
}
export default Component39885;
