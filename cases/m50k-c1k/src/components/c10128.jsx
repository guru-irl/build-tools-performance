import React from 'react';
const LABEL_10128 = 'component_10128';
export function Component10128({ value = 10128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10128, 'data-value': derived.doubled }, children);
}
export default Component10128;
