import React from 'react';
const LABEL_6505 = 'component_6505';
export function Component6505({ value = 6505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6505, 'data-value': derived.doubled }, children);
}
export default Component6505;
