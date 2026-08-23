import React from 'react';
const LABEL_25526 = 'component_25526';
export function Component25526({ value = 25526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25526, 'data-value': derived.doubled }, children);
}
export default Component25526;
