import React from 'react';
const LABEL_34979 = 'component_34979';
export function Component34979({ value = 34979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34979, 'data-value': derived.doubled }, children);
}
export default Component34979;
