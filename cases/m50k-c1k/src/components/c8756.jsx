import React from 'react';
const LABEL_8756 = 'component_8756';
export function Component8756({ value = 8756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8756, 'data-value': derived.doubled }, children);
}
export default Component8756;
