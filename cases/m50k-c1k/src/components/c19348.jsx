import React from 'react';
const LABEL_19348 = 'component_19348';
export function Component19348({ value = 19348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19348, 'data-value': derived.doubled }, children);
}
export default Component19348;
