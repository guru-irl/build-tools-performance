import React from 'react';
const LABEL_28795 = 'component_28795';
export function Component28795({ value = 28795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28795, 'data-value': derived.doubled }, children);
}
export default Component28795;
