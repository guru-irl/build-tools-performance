import React from 'react';
const LABEL_33294 = 'component_33294';
export function Component33294({ value = 33294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33294, 'data-value': derived.doubled }, children);
}
export default Component33294;
