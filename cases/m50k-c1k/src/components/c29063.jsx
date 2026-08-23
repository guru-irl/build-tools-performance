import React from 'react';
const LABEL_29063 = 'component_29063';
export function Component29063({ value = 29063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29063, 'data-value': derived.doubled }, children);
}
export default Component29063;
