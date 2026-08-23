import React from 'react';
const LABEL_4809 = 'component_4809';
export function Component4809({ value = 4809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4809, 'data-value': derived.doubled }, children);
}
export default Component4809;
