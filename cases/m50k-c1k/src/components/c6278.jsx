import React from 'react';
const LABEL_6278 = 'component_6278';
export function Component6278({ value = 6278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6278, 'data-value': derived.doubled }, children);
}
export default Component6278;
