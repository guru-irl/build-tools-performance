import React from 'react';
const LABEL_28819 = 'component_28819';
export function Component28819({ value = 28819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28819, 'data-value': derived.doubled }, children);
}
export default Component28819;
