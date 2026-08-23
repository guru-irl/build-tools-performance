import React from 'react';
const LABEL_11379 = 'component_11379';
export function Component11379({ value = 11379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11379, 'data-value': derived.doubled }, children);
}
export default Component11379;
