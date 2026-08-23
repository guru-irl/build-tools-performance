import React from 'react';
const LABEL_44081 = 'component_44081';
export function Component44081({ value = 44081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44081, 'data-value': derived.doubled }, children);
}
export default Component44081;
