import React from 'react';
const LABEL_40308 = 'component_40308';
export function Component40308({ value = 40308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40308, 'data-value': derived.doubled }, children);
}
export default Component40308;
