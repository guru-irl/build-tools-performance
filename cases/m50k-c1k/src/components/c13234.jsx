import React from 'react';
const LABEL_13234 = 'component_13234';
export function Component13234({ value = 13234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13234, 'data-value': derived.doubled }, children);
}
export default Component13234;
