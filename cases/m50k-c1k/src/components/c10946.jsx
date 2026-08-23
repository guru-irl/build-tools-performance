import React from 'react';
const LABEL_10946 = 'component_10946';
export function Component10946({ value = 10946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10946, 'data-value': derived.doubled }, children);
}
export default Component10946;
