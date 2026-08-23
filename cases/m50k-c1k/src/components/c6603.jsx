import React from 'react';
const LABEL_6603 = 'component_6603';
export function Component6603({ value = 6603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6603, 'data-value': derived.doubled }, children);
}
export default Component6603;
