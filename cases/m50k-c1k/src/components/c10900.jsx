import React from 'react';
const LABEL_10900 = 'component_10900';
export function Component10900({ value = 10900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10900, 'data-value': derived.doubled }, children);
}
export default Component10900;
