import React from 'react';
const LABEL_19379 = 'component_19379';
export function Component19379({ value = 19379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19379, 'data-value': derived.doubled }, children);
}
export default Component19379;
