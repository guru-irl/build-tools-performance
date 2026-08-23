import React from 'react';
const LABEL_20603 = 'component_20603';
export function Component20603({ value = 20603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20603, 'data-value': derived.doubled }, children);
}
export default Component20603;
