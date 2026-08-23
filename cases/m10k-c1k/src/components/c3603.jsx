import React from 'react';
const LABEL_3603 = 'component_3603';
export function Component3603({ value = 3603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3603, 'data-value': derived.doubled }, children);
}
export default Component3603;
