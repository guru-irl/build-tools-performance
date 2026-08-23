import React from 'react';
const LABEL_37209 = 'component_37209';
export function Component37209({ value = 37209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37209, 'data-value': derived.doubled }, children);
}
export default Component37209;
