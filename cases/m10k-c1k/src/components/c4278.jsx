import React from 'react';
const LABEL_4278 = 'component_4278';
export function Component4278({ value = 4278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4278, 'data-value': derived.doubled }, children);
}
export default Component4278;
