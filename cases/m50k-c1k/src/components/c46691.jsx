import React from 'react';
const LABEL_46691 = 'component_46691';
export function Component46691({ value = 46691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46691, 'data-value': derived.doubled }, children);
}
export default Component46691;
