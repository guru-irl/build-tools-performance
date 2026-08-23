import React from 'react';
const LABEL_35603 = 'component_35603';
export function Component35603({ value = 35603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35603, 'data-value': derived.doubled }, children);
}
export default Component35603;
