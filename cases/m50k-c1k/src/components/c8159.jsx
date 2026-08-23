import React from 'react';
const LABEL_8159 = 'component_8159';
export function Component8159({ value = 8159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8159, 'data-value': derived.doubled }, children);
}
export default Component8159;
