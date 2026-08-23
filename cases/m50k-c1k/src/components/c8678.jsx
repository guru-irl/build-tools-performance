import React from 'react';
const LABEL_8678 = 'component_8678';
export function Component8678({ value = 8678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8678, 'data-value': derived.doubled }, children);
}
export default Component8678;
