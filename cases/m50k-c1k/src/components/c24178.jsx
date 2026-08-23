import React from 'react';
const LABEL_24178 = 'component_24178';
export function Component24178({ value = 24178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24178, 'data-value': derived.doubled }, children);
}
export default Component24178;
