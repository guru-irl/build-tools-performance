import React from 'react';
const LABEL_5128 = 'component_5128';
export function Component5128({ value = 5128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5128, 'data-value': derived.doubled }, children);
}
export default Component5128;
