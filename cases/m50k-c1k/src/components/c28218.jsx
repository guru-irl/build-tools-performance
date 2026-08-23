import React from 'react';
const LABEL_28218 = 'component_28218';
export function Component28218({ value = 28218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28218, 'data-value': derived.doubled }, children);
}
export default Component28218;
