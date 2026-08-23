import React from 'react';
const LABEL_46900 = 'component_46900';
export function Component46900({ value = 46900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46900, 'data-value': derived.doubled }, children);
}
export default Component46900;
