import React from 'react';
const LABEL_32128 = 'component_32128';
export function Component32128({ value = 32128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32128, 'data-value': derived.doubled }, children);
}
export default Component32128;
