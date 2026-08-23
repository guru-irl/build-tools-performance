import React from 'react';
const LABEL_5147 = 'component_5147';
export function Component5147({ value = 5147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5147, 'data-value': derived.doubled }, children);
}
export default Component5147;
