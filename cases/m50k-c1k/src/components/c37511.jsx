import React from 'react';
const LABEL_37511 = 'component_37511';
export function Component37511({ value = 37511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37511, 'data-value': derived.doubled }, children);
}
export default Component37511;
