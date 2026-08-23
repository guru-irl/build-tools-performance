import React from 'react';
const LABEL_35215 = 'component_35215';
export function Component35215({ value = 35215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35215, 'data-value': derived.doubled }, children);
}
export default Component35215;
