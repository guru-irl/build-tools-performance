import React from 'react';
const LABEL_4334 = 'component_4334';
export function Component4334({ value = 4334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4334, 'data-value': derived.doubled }, children);
}
export default Component4334;
