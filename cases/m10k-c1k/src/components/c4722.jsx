import React from 'react';
const LABEL_4722 = 'component_4722';
export function Component4722({ value = 4722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4722, 'data-value': derived.doubled }, children);
}
export default Component4722;
