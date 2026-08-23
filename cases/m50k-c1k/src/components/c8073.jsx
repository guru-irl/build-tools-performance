import React from 'react';
const LABEL_8073 = 'component_8073';
export function Component8073({ value = 8073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8073, 'data-value': derived.doubled }, children);
}
export default Component8073;
