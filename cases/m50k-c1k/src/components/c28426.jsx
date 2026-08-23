import React from 'react';
const LABEL_28426 = 'component_28426';
export function Component28426({ value = 28426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28426, 'data-value': derived.doubled }, children);
}
export default Component28426;
