import React from 'react';
const LABEL_32231 = 'component_32231';
export function Component32231({ value = 32231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32231, 'data-value': derived.doubled }, children);
}
export default Component32231;
