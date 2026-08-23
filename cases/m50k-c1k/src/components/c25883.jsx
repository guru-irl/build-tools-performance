import React from 'react';
const LABEL_25883 = 'component_25883';
export function Component25883({ value = 25883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25883, 'data-value': derived.doubled }, children);
}
export default Component25883;
