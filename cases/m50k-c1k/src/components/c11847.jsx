import React from 'react';
const LABEL_11847 = 'component_11847';
export function Component11847({ value = 11847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11847, 'data-value': derived.doubled }, children);
}
export default Component11847;
