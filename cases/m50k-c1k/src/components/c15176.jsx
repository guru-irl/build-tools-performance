import React from 'react';
const LABEL_15176 = 'component_15176';
export function Component15176({ value = 15176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15176, 'data-value': derived.doubled }, children);
}
export default Component15176;
