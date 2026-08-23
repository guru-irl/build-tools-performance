import React from 'react';
const LABEL_16118 = 'component_16118';
export function Component16118({ value = 16118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16118, 'data-value': derived.doubled }, children);
}
export default Component16118;
