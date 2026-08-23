import React from 'react';
const LABEL_30054 = 'component_30054';
export function Component30054({ value = 30054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30054, 'data-value': derived.doubled }, children);
}
export default Component30054;
