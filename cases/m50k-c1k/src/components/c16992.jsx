import React from 'react';
const LABEL_16992 = 'component_16992';
export function Component16992({ value = 16992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16992, 'data-value': derived.doubled }, children);
}
export default Component16992;
