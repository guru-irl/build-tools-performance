import React from 'react';
const LABEL_42678 = 'component_42678';
export function Component42678({ value = 42678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42678, 'data-value': derived.doubled }, children);
}
export default Component42678;
