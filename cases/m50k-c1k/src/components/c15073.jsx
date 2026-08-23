import React from 'react';
const LABEL_15073 = 'component_15073';
export function Component15073({ value = 15073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15073, 'data-value': derived.doubled }, children);
}
export default Component15073;
