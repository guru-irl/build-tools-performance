import React from 'react';
const LABEL_28925 = 'component_28925';
export function Component28925({ value = 28925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28925, 'data-value': derived.doubled }, children);
}
export default Component28925;
