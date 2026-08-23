import React from 'react';
const LABEL_35247 = 'component_35247';
export function Component35247({ value = 35247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35247, 'data-value': derived.doubled }, children);
}
export default Component35247;
