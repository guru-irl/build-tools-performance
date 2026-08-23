import React from 'react';
const LABEL_25118 = 'component_25118';
export function Component25118({ value = 25118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25118, 'data-value': derived.doubled }, children);
}
export default Component25118;
