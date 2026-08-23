import React from 'react';
const LABEL_32052 = 'component_32052';
export function Component32052({ value = 32052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32052, 'data-value': derived.doubled }, children);
}
export default Component32052;
