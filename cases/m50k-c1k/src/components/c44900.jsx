import React from 'react';
const LABEL_44900 = 'component_44900';
export function Component44900({ value = 44900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44900, 'data-value': derived.doubled }, children);
}
export default Component44900;
