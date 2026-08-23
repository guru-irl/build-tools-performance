import React from 'react';
const LABEL_13147 = 'component_13147';
export function Component13147({ value = 13147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13147, 'data-value': derived.doubled }, children);
}
export default Component13147;
