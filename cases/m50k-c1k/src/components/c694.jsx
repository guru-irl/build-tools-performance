import React from 'react';
const LABEL_694 = 'component_694';
export function Component694({ value = 694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_694, 'data-value': derived.doubled }, children);
}
export default Component694;
