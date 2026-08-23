import React from 'react';
const LABEL_12720 = 'component_12720';
export function Component12720({ value = 12720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12720, 'data-value': derived.doubled }, children);
}
export default Component12720;
