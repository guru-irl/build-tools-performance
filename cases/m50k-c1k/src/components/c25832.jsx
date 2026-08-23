import React from 'react';
const LABEL_25832 = 'component_25832';
export function Component25832({ value = 25832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25832, 'data-value': derived.doubled }, children);
}
export default Component25832;
