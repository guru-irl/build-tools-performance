import React from 'react';
const LABEL_9307 = 'component_9307';
export function Component9307({ value = 9307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9307, 'data-value': derived.doubled }, children);
}
export default Component9307;
