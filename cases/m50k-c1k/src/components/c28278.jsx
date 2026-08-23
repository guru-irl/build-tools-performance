import React from 'react';
const LABEL_28278 = 'component_28278';
export function Component28278({ value = 28278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28278, 'data-value': derived.doubled }, children);
}
export default Component28278;
