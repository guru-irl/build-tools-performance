import React from 'react';
const LABEL_29371 = 'component_29371';
export function Component29371({ value = 29371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29371, 'data-value': derived.doubled }, children);
}
export default Component29371;
