import React from 'react';
const LABEL_35700 = 'component_35700';
export function Component35700({ value = 35700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35700, 'data-value': derived.doubled }, children);
}
export default Component35700;
