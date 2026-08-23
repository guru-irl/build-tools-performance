import React from 'react';
const LABEL_30421 = 'component_30421';
export function Component30421({ value = 30421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30421, 'data-value': derived.doubled }, children);
}
export default Component30421;
