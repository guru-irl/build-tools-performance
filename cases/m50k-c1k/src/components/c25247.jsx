import React from 'react';
const LABEL_25247 = 'component_25247';
export function Component25247({ value = 25247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25247, 'data-value': derived.doubled }, children);
}
export default Component25247;
