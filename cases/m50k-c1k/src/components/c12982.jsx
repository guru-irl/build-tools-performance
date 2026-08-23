import React from 'react';
const LABEL_12982 = 'component_12982';
export function Component12982({ value = 12982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12982, 'data-value': derived.doubled }, children);
}
export default Component12982;
