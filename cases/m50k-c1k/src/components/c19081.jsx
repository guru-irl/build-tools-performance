import React from 'react';
const LABEL_19081 = 'component_19081';
export function Component19081({ value = 19081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19081, 'data-value': derived.doubled }, children);
}
export default Component19081;
