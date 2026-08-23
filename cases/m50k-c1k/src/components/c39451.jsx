import React from 'react';
const LABEL_39451 = 'component_39451';
export function Component39451({ value = 39451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39451, 'data-value': derived.doubled }, children);
}
export default Component39451;
