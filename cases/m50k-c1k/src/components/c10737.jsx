import React from 'react';
const LABEL_10737 = 'component_10737';
export function Component10737({ value = 10737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10737, 'data-value': derived.doubled }, children);
}
export default Component10737;
