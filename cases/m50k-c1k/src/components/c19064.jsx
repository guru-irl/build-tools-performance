import React from 'react';
const LABEL_19064 = 'component_19064';
export function Component19064({ value = 19064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19064, 'data-value': derived.doubled }, children);
}
export default Component19064;
