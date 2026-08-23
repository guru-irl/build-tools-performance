import React from 'react';
const LABEL_12689 = 'component_12689';
export function Component12689({ value = 12689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12689, 'data-value': derived.doubled }, children);
}
export default Component12689;
