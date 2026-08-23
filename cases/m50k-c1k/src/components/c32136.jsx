import React from 'react';
const LABEL_32136 = 'component_32136';
export function Component32136({ value = 32136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32136, 'data-value': derived.doubled }, children);
}
export default Component32136;
