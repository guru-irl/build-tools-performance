import React from 'react';
const LABEL_26379 = 'component_26379';
export function Component26379({ value = 26379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26379, 'data-value': derived.doubled }, children);
}
export default Component26379;
