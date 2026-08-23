import React from 'react';
const LABEL_597 = 'component_597';
export function Component597({ value = 597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_597, 'data-value': derived.doubled }, children);
}
export default Component597;
