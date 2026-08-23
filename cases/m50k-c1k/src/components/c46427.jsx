import React from 'react';
const LABEL_46427 = 'component_46427';
export function Component46427({ value = 46427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46427, 'data-value': derived.doubled }, children);
}
export default Component46427;
