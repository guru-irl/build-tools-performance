import React from 'react';
const LABEL_28642 = 'component_28642';
export function Component28642({ value = 28642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28642, 'data-value': derived.doubled }, children);
}
export default Component28642;
