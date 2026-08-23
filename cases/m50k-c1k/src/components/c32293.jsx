import React from 'react';
const LABEL_32293 = 'component_32293';
export function Component32293({ value = 32293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32293, 'data-value': derived.doubled }, children);
}
export default Component32293;
