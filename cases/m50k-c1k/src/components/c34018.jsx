import React from 'react';
const LABEL_34018 = 'component_34018';
export function Component34018({ value = 34018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34018, 'data-value': derived.doubled }, children);
}
export default Component34018;
