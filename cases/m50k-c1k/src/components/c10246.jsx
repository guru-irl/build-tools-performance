import React from 'react';
const LABEL_10246 = 'component_10246';
export function Component10246({ value = 10246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10246, 'data-value': derived.doubled }, children);
}
export default Component10246;
