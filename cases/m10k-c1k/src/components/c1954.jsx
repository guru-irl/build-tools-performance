import React from 'react';
const LABEL_1954 = 'component_1954';
export function Component1954({ value = 1954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1954, 'data-value': derived.doubled }, children);
}
export default Component1954;
