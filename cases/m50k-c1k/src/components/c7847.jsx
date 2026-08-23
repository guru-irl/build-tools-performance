import React from 'react';
const LABEL_7847 = 'component_7847';
export function Component7847({ value = 7847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7847, 'data-value': derived.doubled }, children);
}
export default Component7847;
