import React from 'react';
const LABEL_16466 = 'component_16466';
export function Component16466({ value = 16466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16466, 'data-value': derived.doubled }, children);
}
export default Component16466;
