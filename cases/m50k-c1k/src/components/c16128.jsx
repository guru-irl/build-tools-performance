import React from 'react';
const LABEL_16128 = 'component_16128';
export function Component16128({ value = 16128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16128, 'data-value': derived.doubled }, children);
}
export default Component16128;
