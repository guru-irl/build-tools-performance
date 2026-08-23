import React from 'react';
const LABEL_45379 = 'component_45379';
export function Component45379({ value = 45379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45379, 'data-value': derived.doubled }, children);
}
export default Component45379;
