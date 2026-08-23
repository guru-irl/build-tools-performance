import React from 'react';
const LABEL_7064 = 'component_7064';
export function Component7064({ value = 7064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7064, 'data-value': derived.doubled }, children);
}
export default Component7064;
