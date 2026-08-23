import React from 'react';
const LABEL_7326 = 'component_7326';
export function Component7326({ value = 7326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7326, 'data-value': derived.doubled }, children);
}
export default Component7326;
