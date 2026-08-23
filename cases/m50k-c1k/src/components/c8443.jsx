import React from 'react';
const LABEL_8443 = 'component_8443';
export function Component8443({ value = 8443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8443, 'data-value': derived.doubled }, children);
}
export default Component8443;
