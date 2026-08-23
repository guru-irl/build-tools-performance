import React from 'react';
const LABEL_32137 = 'component_32137';
export function Component32137({ value = 32137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32137, 'data-value': derived.doubled }, children);
}
export default Component32137;
