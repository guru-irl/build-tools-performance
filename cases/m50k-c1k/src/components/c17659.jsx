import React from 'react';
const LABEL_17659 = 'component_17659';
export function Component17659({ value = 17659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17659, 'data-value': derived.doubled }, children);
}
export default Component17659;
