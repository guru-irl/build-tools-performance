import React from 'react';
const LABEL_12659 = 'component_12659';
export function Component12659({ value = 12659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12659, 'data-value': derived.doubled }, children);
}
export default Component12659;
