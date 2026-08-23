import React from 'react';
const LABEL_39422 = 'component_39422';
export function Component39422({ value = 39422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39422, 'data-value': derived.doubled }, children);
}
export default Component39422;
