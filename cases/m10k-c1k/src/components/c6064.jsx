import React from 'react';
const LABEL_6064 = 'component_6064';
export function Component6064({ value = 6064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6064, 'data-value': derived.doubled }, children);
}
export default Component6064;
