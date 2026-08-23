import React from 'react';
const LABEL_12512 = 'component_12512';
export function Component12512({ value = 12512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12512, 'data-value': derived.doubled }, children);
}
export default Component12512;
