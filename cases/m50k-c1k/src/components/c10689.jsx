import React from 'react';
const LABEL_10689 = 'component_10689';
export function Component10689({ value = 10689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10689, 'data-value': derived.doubled }, children);
}
export default Component10689;
