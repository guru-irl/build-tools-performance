import React from 'react';
const LABEL_25204 = 'component_25204';
export function Component25204({ value = 25204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25204, 'data-value': derived.doubled }, children);
}
export default Component25204;
