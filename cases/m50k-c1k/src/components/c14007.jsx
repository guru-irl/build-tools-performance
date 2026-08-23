import React from 'react';
const LABEL_14007 = 'component_14007';
export function Component14007({ value = 14007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14007, 'data-value': derived.doubled }, children);
}
export default Component14007;
