import React from 'react';
const LABEL_40639 = 'component_40639';
export function Component40639({ value = 40639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40639, 'data-value': derived.doubled }, children);
}
export default Component40639;
