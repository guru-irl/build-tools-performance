import React from 'react';
const LABEL_221 = 'component_221';
export function Component221({ value = 221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_221, 'data-value': derived.doubled }, children);
}
export default Component221;
