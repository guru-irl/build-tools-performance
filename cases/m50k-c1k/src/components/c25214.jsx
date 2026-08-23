import React from 'react';
const LABEL_25214 = 'component_25214';
export function Component25214({ value = 25214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25214, 'data-value': derived.doubled }, children);
}
export default Component25214;
