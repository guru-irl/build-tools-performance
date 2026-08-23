import React from 'react';
const LABEL_22597 = 'component_22597';
export function Component22597({ value = 22597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22597, 'data-value': derived.doubled }, children);
}
export default Component22597;
