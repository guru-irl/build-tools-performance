import React from 'react';
const LABEL_20542 = 'component_20542';
export function Component20542({ value = 20542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20542, 'data-value': derived.doubled }, children);
}
export default Component20542;
