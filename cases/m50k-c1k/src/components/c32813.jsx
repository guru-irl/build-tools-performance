import React from 'react';
const LABEL_32813 = 'component_32813';
export function Component32813({ value = 32813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32813, 'data-value': derived.doubled }, children);
}
export default Component32813;
