import React from 'react';
const LABEL_37247 = 'component_37247';
export function Component37247({ value = 37247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37247, 'data-value': derived.doubled }, children);
}
export default Component37247;
