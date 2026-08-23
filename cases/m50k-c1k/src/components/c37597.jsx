import React from 'react';
const LABEL_37597 = 'component_37597';
export function Component37597({ value = 37597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37597, 'data-value': derived.doubled }, children);
}
export default Component37597;
