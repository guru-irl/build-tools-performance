import React from 'react';
const LABEL_19128 = 'component_19128';
export function Component19128({ value = 19128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19128, 'data-value': derived.doubled }, children);
}
export default Component19128;
