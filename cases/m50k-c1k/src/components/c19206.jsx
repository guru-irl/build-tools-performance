import React from 'react';
const LABEL_19206 = 'component_19206';
export function Component19206({ value = 19206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19206, 'data-value': derived.doubled }, children);
}
export default Component19206;
