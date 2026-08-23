import React from 'react';
const LABEL_8871 = 'component_8871';
export function Component8871({ value = 8871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8871, 'data-value': derived.doubled }, children);
}
export default Component8871;
