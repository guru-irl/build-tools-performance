import React from 'react';
const LABEL_8048 = 'component_8048';
export function Component8048({ value = 8048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8048, 'data-value': derived.doubled }, children);
}
export default Component8048;
