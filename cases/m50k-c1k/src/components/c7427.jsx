import React from 'react';
const LABEL_7427 = 'component_7427';
export function Component7427({ value = 7427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7427, 'data-value': derived.doubled }, children);
}
export default Component7427;
