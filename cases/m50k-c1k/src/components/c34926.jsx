import React from 'react';
const LABEL_34926 = 'component_34926';
export function Component34926({ value = 34926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34926, 'data-value': derived.doubled }, children);
}
export default Component34926;
