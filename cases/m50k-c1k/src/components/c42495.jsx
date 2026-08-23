import React from 'react';
const LABEL_42495 = 'component_42495';
export function Component42495({ value = 42495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42495, 'data-value': derived.doubled }, children);
}
export default Component42495;
