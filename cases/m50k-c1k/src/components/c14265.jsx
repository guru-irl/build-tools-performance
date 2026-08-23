import React from 'react';
const LABEL_14265 = 'component_14265';
export function Component14265({ value = 14265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14265, 'data-value': derived.doubled }, children);
}
export default Component14265;
