import React from 'react';
const LABEL_1147 = 'component_1147';
export function Component1147({ value = 1147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1147, 'data-value': derived.doubled }, children);
}
export default Component1147;
