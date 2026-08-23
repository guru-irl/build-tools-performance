import React from 'react';
const LABEL_25921 = 'component_25921';
export function Component25921({ value = 25921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25921, 'data-value': derived.doubled }, children);
}
export default Component25921;
