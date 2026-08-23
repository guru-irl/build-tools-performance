import React from 'react';
const LABEL_8064 = 'component_8064';
export function Component8064({ value = 8064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8064, 'data-value': derived.doubled }, children);
}
export default Component8064;
