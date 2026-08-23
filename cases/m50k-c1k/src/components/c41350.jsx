import React from 'react';
const LABEL_41350 = 'component_41350';
export function Component41350({ value = 41350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41350, 'data-value': derived.doubled }, children);
}
export default Component41350;
