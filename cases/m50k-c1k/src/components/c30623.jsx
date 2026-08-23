import React from 'react';
const LABEL_30623 = 'component_30623';
export function Component30623({ value = 30623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30623, 'data-value': derived.doubled }, children);
}
export default Component30623;
