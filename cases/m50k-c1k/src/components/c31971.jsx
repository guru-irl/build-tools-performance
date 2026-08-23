import React from 'react';
const LABEL_31971 = 'component_31971';
export function Component31971({ value = 31971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31971, 'data-value': derived.doubled }, children);
}
export default Component31971;
