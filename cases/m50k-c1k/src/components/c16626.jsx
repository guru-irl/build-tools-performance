import React from 'react';
const LABEL_16626 = 'component_16626';
export function Component16626({ value = 16626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16626, 'data-value': derived.doubled }, children);
}
export default Component16626;
