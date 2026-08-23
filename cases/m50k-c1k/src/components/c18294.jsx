import React from 'react';
const LABEL_18294 = 'component_18294';
export function Component18294({ value = 18294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18294, 'data-value': derived.doubled }, children);
}
export default Component18294;
