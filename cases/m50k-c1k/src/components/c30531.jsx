import React from 'react';
const LABEL_30531 = 'component_30531';
export function Component30531({ value = 30531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30531, 'data-value': derived.doubled }, children);
}
export default Component30531;
