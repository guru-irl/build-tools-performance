import React from 'react';
const LABEL_18379 = 'component_18379';
export function Component18379({ value = 18379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18379, 'data-value': derived.doubled }, children);
}
export default Component18379;
