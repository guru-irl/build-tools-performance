import React from 'react';
const LABEL_32232 = 'component_32232';
export function Component32232({ value = 32232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32232, 'data-value': derived.doubled }, children);
}
export default Component32232;
