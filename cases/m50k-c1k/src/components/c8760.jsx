import React from 'react';
const LABEL_8760 = 'component_8760';
export function Component8760({ value = 8760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8760, 'data-value': derived.doubled }, children);
}
export default Component8760;
