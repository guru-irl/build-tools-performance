import React from 'react';
const LABEL_30330 = 'component_30330';
export function Component30330({ value = 30330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30330, 'data-value': derived.doubled }, children);
}
export default Component30330;
