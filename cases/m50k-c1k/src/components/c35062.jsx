import React from 'react';
const LABEL_35062 = 'component_35062';
export function Component35062({ value = 35062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35062, 'data-value': derived.doubled }, children);
}
export default Component35062;
