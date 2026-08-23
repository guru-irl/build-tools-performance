import React from 'react';
const LABEL_137 = 'component_137';
export function Component137({ value = 137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_137, 'data-value': derived.doubled }, children);
}
export default Component137;
