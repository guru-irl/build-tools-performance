import React from 'react';
const LABEL_40064 = 'component_40064';
export function Component40064({ value = 40064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40064, 'data-value': derived.doubled }, children);
}
export default Component40064;
