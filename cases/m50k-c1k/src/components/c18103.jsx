import React from 'react';
const LABEL_18103 = 'component_18103';
export function Component18103({ value = 18103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18103, 'data-value': derived.doubled }, children);
}
export default Component18103;
