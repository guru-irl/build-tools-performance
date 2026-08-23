import React from 'react';
const LABEL_1064 = 'component_1064';
export function Component1064({ value = 1064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1064, 'data-value': derived.doubled }, children);
}
export default Component1064;
