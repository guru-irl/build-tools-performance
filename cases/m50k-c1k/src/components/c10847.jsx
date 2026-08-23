import React from 'react';
const LABEL_10847 = 'component_10847';
export function Component10847({ value = 10847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10847, 'data-value': derived.doubled }, children);
}
export default Component10847;
