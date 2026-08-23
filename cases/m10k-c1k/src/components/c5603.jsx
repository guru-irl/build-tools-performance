import React from 'react';
const LABEL_5603 = 'component_5603';
export function Component5603({ value = 5603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5603, 'data-value': derived.doubled }, children);
}
export default Component5603;
