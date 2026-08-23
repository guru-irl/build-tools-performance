import React from 'react';
const LABEL_18983 = 'component_18983';
export function Component18983({ value = 18983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18983, 'data-value': derived.doubled }, children);
}
export default Component18983;
