import React from 'react';
const LABEL_28081 = 'component_28081';
export function Component28081({ value = 28081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28081, 'data-value': derived.doubled }, children);
}
export default Component28081;
