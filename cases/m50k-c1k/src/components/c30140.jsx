import React from 'react';
const LABEL_30140 = 'component_30140';
export function Component30140({ value = 30140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30140, 'data-value': derived.doubled }, children);
}
export default Component30140;
