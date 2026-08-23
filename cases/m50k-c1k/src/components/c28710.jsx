import React from 'react';
const LABEL_28710 = 'component_28710';
export function Component28710({ value = 28710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28710, 'data-value': derived.doubled }, children);
}
export default Component28710;
