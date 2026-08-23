import React from 'react';
const LABEL_42132 = 'component_42132';
export function Component42132({ value = 42132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42132, 'data-value': derived.doubled }, children);
}
export default Component42132;
