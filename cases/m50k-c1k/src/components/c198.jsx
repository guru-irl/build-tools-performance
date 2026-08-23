import React from 'react';
const LABEL_198 = 'component_198';
export function Component198({ value = 198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_198, 'data-value': derived.doubled }, children);
}
export default Component198;
