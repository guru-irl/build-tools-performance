import React from 'react';
const LABEL_28000 = 'component_28000';
export function Component28000({ value = 28000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28000, 'data-value': derived.doubled }, children);
}
export default Component28000;
