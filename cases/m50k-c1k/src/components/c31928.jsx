import React from 'react';
const LABEL_31928 = 'component_31928';
export function Component31928({ value = 31928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31928, 'data-value': derived.doubled }, children);
}
export default Component31928;
