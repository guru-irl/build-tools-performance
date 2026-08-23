import React from 'react';
const LABEL_13278 = 'component_13278';
export function Component13278({ value = 13278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13278, 'data-value': derived.doubled }, children);
}
export default Component13278;
