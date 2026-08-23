import React from 'react';
const LABEL_31907 = 'component_31907';
export function Component31907({ value = 31907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31907, 'data-value': derived.doubled }, children);
}
export default Component31907;
