import React from 'react';
const LABEL_26999 = 'component_26999';
export function Component26999({ value = 26999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26999, 'data-value': derived.doubled }, children);
}
export default Component26999;
