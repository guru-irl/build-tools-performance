import React from 'react';
const LABEL_30624 = 'component_30624';
export function Component30624({ value = 30624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30624, 'data-value': derived.doubled }, children);
}
export default Component30624;
