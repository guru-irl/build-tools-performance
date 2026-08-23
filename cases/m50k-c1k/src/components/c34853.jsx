import React from 'react';
const LABEL_34853 = 'component_34853';
export function Component34853({ value = 34853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34853, 'data-value': derived.doubled }, children);
}
export default Component34853;
