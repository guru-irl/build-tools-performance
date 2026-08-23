import React from 'react';
const LABEL_28739 = 'component_28739';
export function Component28739({ value = 28739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28739, 'data-value': derived.doubled }, children);
}
export default Component28739;
