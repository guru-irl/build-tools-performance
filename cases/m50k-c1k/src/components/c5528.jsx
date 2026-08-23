import React from 'react';
const LABEL_5528 = 'component_5528';
export function Component5528({ value = 5528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5528, 'data-value': derived.doubled }, children);
}
export default Component5528;
