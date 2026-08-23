import React from 'react';
const LABEL_16247 = 'component_16247';
export function Component16247({ value = 16247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16247, 'data-value': derived.doubled }, children);
}
export default Component16247;
