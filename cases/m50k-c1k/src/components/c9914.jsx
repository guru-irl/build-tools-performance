import React from 'react';
const LABEL_9914 = 'component_9914';
export function Component9914({ value = 9914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9914, 'data-value': derived.doubled }, children);
}
export default Component9914;
