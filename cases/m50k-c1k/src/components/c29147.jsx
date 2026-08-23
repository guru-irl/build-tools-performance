import React from 'react';
const LABEL_29147 = 'component_29147';
export function Component29147({ value = 29147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29147, 'data-value': derived.doubled }, children);
}
export default Component29147;
