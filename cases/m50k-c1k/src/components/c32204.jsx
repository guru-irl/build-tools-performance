import React from 'react';
const LABEL_32204 = 'component_32204';
export function Component32204({ value = 32204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32204, 'data-value': derived.doubled }, children);
}
export default Component32204;
