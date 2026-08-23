import React from 'react';
const LABEL_31819 = 'component_31819';
export function Component31819({ value = 31819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31819, 'data-value': derived.doubled }, children);
}
export default Component31819;
