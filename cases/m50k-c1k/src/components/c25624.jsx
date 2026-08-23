import React from 'react';
const LABEL_25624 = 'component_25624';
export function Component25624({ value = 25624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25624, 'data-value': derived.doubled }, children);
}
export default Component25624;
