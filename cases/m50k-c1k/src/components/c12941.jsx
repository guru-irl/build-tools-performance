import React from 'react';
const LABEL_12941 = 'component_12941';
export function Component12941({ value = 12941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12941, 'data-value': derived.doubled }, children);
}
export default Component12941;
