import React from 'react';
const LABEL_35122 = 'component_35122';
export function Component35122({ value = 35122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35122, 'data-value': derived.doubled }, children);
}
export default Component35122;
