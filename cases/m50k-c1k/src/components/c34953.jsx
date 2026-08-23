import React from 'react';
const LABEL_34953 = 'component_34953';
export function Component34953({ value = 34953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34953, 'data-value': derived.doubled }, children);
}
export default Component34953;
