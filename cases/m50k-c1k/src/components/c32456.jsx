import React from 'react';
const LABEL_32456 = 'component_32456';
export function Component32456({ value = 32456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32456, 'data-value': derived.doubled }, children);
}
export default Component32456;
