import React from 'react';
const LABEL_26233 = 'component_26233';
export function Component26233({ value = 26233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26233, 'data-value': derived.doubled }, children);
}
export default Component26233;
