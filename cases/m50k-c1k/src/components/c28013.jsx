import React from 'react';
const LABEL_28013 = 'component_28013';
export function Component28013({ value = 28013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28013, 'data-value': derived.doubled }, children);
}
export default Component28013;
