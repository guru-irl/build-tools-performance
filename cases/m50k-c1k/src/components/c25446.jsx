import React from 'react';
const LABEL_25446 = 'component_25446';
export function Component25446({ value = 25446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25446, 'data-value': derived.doubled }, children);
}
export default Component25446;
