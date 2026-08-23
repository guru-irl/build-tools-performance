import React from 'react';
const LABEL_36247 = 'component_36247';
export function Component36247({ value = 36247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36247, 'data-value': derived.doubled }, children);
}
export default Component36247;
