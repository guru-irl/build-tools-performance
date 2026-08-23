import React from 'react';
const LABEL_14379 = 'component_14379';
export function Component14379({ value = 14379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14379, 'data-value': derived.doubled }, children);
}
export default Component14379;
