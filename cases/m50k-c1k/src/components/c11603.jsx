import React from 'react';
const LABEL_11603 = 'component_11603';
export function Component11603({ value = 11603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11603, 'data-value': derived.doubled }, children);
}
export default Component11603;
