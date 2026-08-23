import React from 'react';
const LABEL_28861 = 'component_28861';
export function Component28861({ value = 28861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28861, 'data-value': derived.doubled }, children);
}
export default Component28861;
