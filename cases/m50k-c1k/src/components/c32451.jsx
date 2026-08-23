import React from 'react';
const LABEL_32451 = 'component_32451';
export function Component32451({ value = 32451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32451, 'data-value': derived.doubled }, children);
}
export default Component32451;
