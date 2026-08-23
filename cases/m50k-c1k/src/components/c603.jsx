import React from 'react';
const LABEL_603 = 'component_603';
export function Component603({ value = 603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_603, 'data-value': derived.doubled }, children);
}
export default Component603;
