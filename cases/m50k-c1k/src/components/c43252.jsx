import React from 'react';
const LABEL_43252 = 'component_43252';
export function Component43252({ value = 43252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43252, 'data-value': derived.doubled }, children);
}
export default Component43252;
