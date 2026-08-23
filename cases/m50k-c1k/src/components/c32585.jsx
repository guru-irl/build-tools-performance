import React from 'react';
const LABEL_32585 = 'component_32585';
export function Component32585({ value = 32585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32585, 'data-value': derived.doubled }, children);
}
export default Component32585;
