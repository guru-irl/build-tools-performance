import React from 'react';
const LABEL_28437 = 'component_28437';
export function Component28437({ value = 28437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28437, 'data-value': derived.doubled }, children);
}
export default Component28437;
