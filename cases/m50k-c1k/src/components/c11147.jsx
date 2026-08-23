import React from 'react';
const LABEL_11147 = 'component_11147';
export function Component11147({ value = 11147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11147, 'data-value': derived.doubled }, children);
}
export default Component11147;
