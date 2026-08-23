import React from 'react';
const LABEL_11064 = 'component_11064';
export function Component11064({ value = 11064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11064, 'data-value': derived.doubled }, children);
}
export default Component11064;
