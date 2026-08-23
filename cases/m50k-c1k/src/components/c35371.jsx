import React from 'react';
const LABEL_35371 = 'component_35371';
export function Component35371({ value = 35371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35371, 'data-value': derived.doubled }, children);
}
export default Component35371;
