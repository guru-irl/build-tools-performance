import React from 'react';
const LABEL_39918 = 'component_39918';
export function Component39918({ value = 39918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39918, 'data-value': derived.doubled }, children);
}
export default Component39918;
