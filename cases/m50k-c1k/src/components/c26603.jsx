import React from 'react';
const LABEL_26603 = 'component_26603';
export function Component26603({ value = 26603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26603, 'data-value': derived.doubled }, children);
}
export default Component26603;
