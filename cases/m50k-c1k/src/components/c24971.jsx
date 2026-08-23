import React from 'react';
const LABEL_24971 = 'component_24971';
export function Component24971({ value = 24971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24971, 'data-value': derived.doubled }, children);
}
export default Component24971;
