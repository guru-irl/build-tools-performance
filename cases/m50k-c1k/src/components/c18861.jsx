import React from 'react';
const LABEL_18861 = 'component_18861';
export function Component18861({ value = 18861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18861, 'data-value': derived.doubled }, children);
}
export default Component18861;
