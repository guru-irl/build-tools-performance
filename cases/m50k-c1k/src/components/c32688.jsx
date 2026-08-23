import React from 'react';
const LABEL_32688 = 'component_32688';
export function Component32688({ value = 32688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32688, 'data-value': derived.doubled }, children);
}
export default Component32688;
