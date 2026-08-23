import React from 'react';
const LABEL_8900 = 'component_8900';
export function Component8900({ value = 8900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8900, 'data-value': derived.doubled }, children);
}
export default Component8900;
