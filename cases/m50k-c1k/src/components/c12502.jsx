import React from 'react';
const LABEL_12502 = 'component_12502';
export function Component12502({ value = 12502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12502, 'data-value': derived.doubled }, children);
}
export default Component12502;
