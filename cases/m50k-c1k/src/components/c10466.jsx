import React from 'react';
const LABEL_10466 = 'component_10466';
export function Component10466({ value = 10466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10466, 'data-value': derived.doubled }, children);
}
export default Component10466;
