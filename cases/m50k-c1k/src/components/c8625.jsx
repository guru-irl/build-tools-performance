import React from 'react';
const LABEL_8625 = 'component_8625';
export function Component8625({ value = 8625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8625, 'data-value': derived.doubled }, children);
}
export default Component8625;
