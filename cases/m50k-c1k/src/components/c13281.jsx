import React from 'react';
const LABEL_13281 = 'component_13281';
export function Component13281({ value = 13281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13281, 'data-value': derived.doubled }, children);
}
export default Component13281;
