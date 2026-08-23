import React from 'react';
const LABEL_34891 = 'component_34891';
export function Component34891({ value = 34891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34891, 'data-value': derived.doubled }, children);
}
export default Component34891;
