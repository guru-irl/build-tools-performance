import React from 'react';
const LABEL_19278 = 'component_19278';
export function Component19278({ value = 19278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19278, 'data-value': derived.doubled }, children);
}
export default Component19278;
