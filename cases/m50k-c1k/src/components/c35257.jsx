import React from 'react';
const LABEL_35257 = 'component_35257';
export function Component35257({ value = 35257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35257, 'data-value': derived.doubled }, children);
}
export default Component35257;
