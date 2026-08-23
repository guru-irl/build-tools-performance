import React from 'react';
const LABEL_30176 = 'component_30176';
export function Component30176({ value = 30176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30176, 'data-value': derived.doubled }, children);
}
export default Component30176;
