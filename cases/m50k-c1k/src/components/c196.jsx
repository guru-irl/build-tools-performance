import React from 'react';
const LABEL_196 = 'component_196';
export function Component196({ value = 196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_196, 'data-value': derived.doubled }, children);
}
export default Component196;
