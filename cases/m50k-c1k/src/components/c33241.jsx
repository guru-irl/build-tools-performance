import React from 'react';
const LABEL_33241 = 'component_33241';
export function Component33241({ value = 33241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33241, 'data-value': derived.doubled }, children);
}
export default Component33241;
