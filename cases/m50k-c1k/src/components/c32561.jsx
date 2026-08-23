import React from 'react';
const LABEL_32561 = 'component_32561';
export function Component32561({ value = 32561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32561, 'data-value': derived.doubled }, children);
}
export default Component32561;
