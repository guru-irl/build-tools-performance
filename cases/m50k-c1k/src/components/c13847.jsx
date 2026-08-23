import React from 'react';
const LABEL_13847 = 'component_13847';
export function Component13847({ value = 13847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13847, 'data-value': derived.doubled }, children);
}
export default Component13847;
