import React from 'react';
const LABEL_12073 = 'component_12073';
export function Component12073({ value = 12073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12073, 'data-value': derived.doubled }, children);
}
export default Component12073;
