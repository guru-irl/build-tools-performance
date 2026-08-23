import React from 'react';
const LABEL_24051 = 'component_24051';
export function Component24051({ value = 24051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24051, 'data-value': derived.doubled }, children);
}
export default Component24051;
