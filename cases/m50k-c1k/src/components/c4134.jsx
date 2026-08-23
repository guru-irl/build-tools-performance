import React from 'react';
const LABEL_4134 = 'component_4134';
export function Component4134({ value = 4134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4134, 'data-value': derived.doubled }, children);
}
export default Component4134;
