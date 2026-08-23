import React from 'react';
const LABEL_31528 = 'component_31528';
export function Component31528({ value = 31528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31528, 'data-value': derived.doubled }, children);
}
export default Component31528;
