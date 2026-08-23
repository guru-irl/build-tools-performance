import React from 'react';
const LABEL_44743 = 'component_44743';
export function Component44743({ value = 44743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44743, 'data-value': derived.doubled }, children);
}
export default Component44743;
