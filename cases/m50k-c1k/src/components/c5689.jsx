import React from 'react';
const LABEL_5689 = 'component_5689';
export function Component5689({ value = 5689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5689, 'data-value': derived.doubled }, children);
}
export default Component5689;
