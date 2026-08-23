import React from 'react';
const LABEL_33468 = 'component_33468';
export function Component33468({ value = 33468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33468, 'data-value': derived.doubled }, children);
}
export default Component33468;
