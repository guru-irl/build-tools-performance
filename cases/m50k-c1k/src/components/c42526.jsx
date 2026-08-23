import React from 'react';
const LABEL_42526 = 'component_42526';
export function Component42526({ value = 42526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42526, 'data-value': derived.doubled }, children);
}
export default Component42526;
