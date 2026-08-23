import React from 'react';
const LABEL_25869 = 'component_25869';
export function Component25869({ value = 25869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25869, 'data-value': derived.doubled }, children);
}
export default Component25869;
