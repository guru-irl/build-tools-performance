import React from 'react';
const LABEL_39916 = 'component_39916';
export function Component39916({ value = 39916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39916, 'data-value': derived.doubled }, children);
}
export default Component39916;
