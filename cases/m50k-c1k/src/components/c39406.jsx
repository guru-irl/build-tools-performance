import React from 'react';
const LABEL_39406 = 'component_39406';
export function Component39406({ value = 39406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39406, 'data-value': derived.doubled }, children);
}
export default Component39406;
