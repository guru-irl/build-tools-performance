import React from 'react';
const LABEL_35064 = 'component_35064';
export function Component35064({ value = 35064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35064, 'data-value': derived.doubled }, children);
}
export default Component35064;
