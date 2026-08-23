import React from 'react';
const LABEL_29064 = 'component_29064';
export function Component29064({ value = 29064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29064, 'data-value': derived.doubled }, children);
}
export default Component29064;
