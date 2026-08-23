import React from 'react';
const LABEL_41624 = 'component_41624';
export function Component41624({ value = 41624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41624, 'data-value': derived.doubled }, children);
}
export default Component41624;
