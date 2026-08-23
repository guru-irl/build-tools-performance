import React from 'react';
const LABEL_25478 = 'component_25478';
export function Component25478({ value = 25478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25478, 'data-value': derived.doubled }, children);
}
export default Component25478;
