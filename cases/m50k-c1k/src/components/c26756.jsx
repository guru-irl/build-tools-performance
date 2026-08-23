import React from 'react';
const LABEL_26756 = 'component_26756';
export function Component26756({ value = 26756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26756, 'data-value': derived.doubled }, children);
}
export default Component26756;
