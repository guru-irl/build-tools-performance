import React from 'react';
const LABEL_7597 = 'component_7597';
export function Component7597({ value = 7597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7597, 'data-value': derived.doubled }, children);
}
export default Component7597;
