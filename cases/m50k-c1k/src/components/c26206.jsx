import React from 'react';
const LABEL_26206 = 'component_26206';
export function Component26206({ value = 26206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26206, 'data-value': derived.doubled }, children);
}
export default Component26206;
