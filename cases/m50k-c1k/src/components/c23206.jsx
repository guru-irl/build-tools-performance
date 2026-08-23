import React from 'react';
const LABEL_23206 = 'component_23206';
export function Component23206({ value = 23206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23206, 'data-value': derived.doubled }, children);
}
export default Component23206;
