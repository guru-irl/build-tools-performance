import React from 'react';
const LABEL_4064 = 'component_4064';
export function Component4064({ value = 4064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4064, 'data-value': derived.doubled }, children);
}
export default Component4064;
