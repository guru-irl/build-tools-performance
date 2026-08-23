import React from 'react';
const LABEL_31443 = 'component_31443';
export function Component31443({ value = 31443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31443, 'data-value': derived.doubled }, children);
}
export default Component31443;
