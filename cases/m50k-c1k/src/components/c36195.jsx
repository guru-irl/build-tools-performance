import React from 'react';
const LABEL_36195 = 'component_36195';
export function Component36195({ value = 36195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36195, 'data-value': derived.doubled }, children);
}
export default Component36195;
