import React from 'react';
const LABEL_6900 = 'component_6900';
export function Component6900({ value = 6900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6900, 'data-value': derived.doubled }, children);
}
export default Component6900;
