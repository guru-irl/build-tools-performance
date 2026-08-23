import React from 'react';
const LABEL_15544 = 'component_15544';
export function Component15544({ value = 15544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15544, 'data-value': derived.doubled }, children);
}
export default Component15544;
