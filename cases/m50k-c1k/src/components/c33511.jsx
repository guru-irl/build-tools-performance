import React from 'react';
const LABEL_33511 = 'component_33511';
export function Component33511({ value = 33511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33511, 'data-value': derived.doubled }, children);
}
export default Component33511;
