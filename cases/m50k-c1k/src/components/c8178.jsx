import React from 'react';
const LABEL_8178 = 'component_8178';
export function Component8178({ value = 8178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8178, 'data-value': derived.doubled }, children);
}
export default Component8178;
