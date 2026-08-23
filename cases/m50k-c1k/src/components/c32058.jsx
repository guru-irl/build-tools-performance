import React from 'react';
const LABEL_32058 = 'component_32058';
export function Component32058({ value = 32058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32058, 'data-value': derived.doubled }, children);
}
export default Component32058;
