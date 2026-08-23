import React from 'react';
const LABEL_13971 = 'component_13971';
export function Component13971({ value = 13971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13971, 'data-value': derived.doubled }, children);
}
export default Component13971;
