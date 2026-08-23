import React from 'react';
const LABEL_8847 = 'component_8847';
export function Component8847({ value = 8847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8847, 'data-value': derived.doubled }, children);
}
export default Component8847;
