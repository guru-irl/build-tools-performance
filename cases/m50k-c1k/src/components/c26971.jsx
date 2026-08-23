import React from 'react';
const LABEL_26971 = 'component_26971';
export function Component26971({ value = 26971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26971, 'data-value': derived.doubled }, children);
}
export default Component26971;
