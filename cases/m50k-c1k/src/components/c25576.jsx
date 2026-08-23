import React from 'react';
const LABEL_25576 = 'component_25576';
export function Component25576({ value = 25576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25576, 'data-value': derived.doubled }, children);
}
export default Component25576;
