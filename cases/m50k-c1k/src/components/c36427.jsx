import React from 'react';
const LABEL_36427 = 'component_36427';
export function Component36427({ value = 36427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36427, 'data-value': derived.doubled }, children);
}
export default Component36427;
