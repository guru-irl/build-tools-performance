import React from 'react';
const LABEL_10794 = 'component_10794';
export function Component10794({ value = 10794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10794, 'data-value': derived.doubled }, children);
}
export default Component10794;
