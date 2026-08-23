import React from 'react';
const LABEL_32507 = 'component_32507';
export function Component32507({ value = 32507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32507, 'data-value': derived.doubled }, children);
}
export default Component32507;
