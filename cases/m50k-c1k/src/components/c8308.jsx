import React from 'react';
const LABEL_8308 = 'component_8308';
export function Component8308({ value = 8308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8308, 'data-value': derived.doubled }, children);
}
export default Component8308;
