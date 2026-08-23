import React from 'react';
const LABEL_14241 = 'component_14241';
export function Component14241({ value = 14241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14241, 'data-value': derived.doubled }, children);
}
export default Component14241;
