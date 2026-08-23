import React from 'react';
const LABEL_40847 = 'component_40847';
export function Component40847({ value = 40847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40847, 'data-value': derived.doubled }, children);
}
export default Component40847;
