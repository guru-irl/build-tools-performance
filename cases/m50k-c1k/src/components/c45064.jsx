import React from 'react';
const LABEL_45064 = 'component_45064';
export function Component45064({ value = 45064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45064, 'data-value': derived.doubled }, children);
}
export default Component45064;
