import React from 'react';
const LABEL_29971 = 'component_29971';
export function Component29971({ value = 29971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29971, 'data-value': derived.doubled }, children);
}
export default Component29971;
