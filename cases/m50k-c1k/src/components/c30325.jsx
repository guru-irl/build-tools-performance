import React from 'react';
const LABEL_30325 = 'component_30325';
export function Component30325({ value = 30325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30325, 'data-value': derived.doubled }, children);
}
export default Component30325;
