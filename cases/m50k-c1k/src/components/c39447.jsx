import React from 'react';
const LABEL_39447 = 'component_39447';
export function Component39447({ value = 39447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39447, 'data-value': derived.doubled }, children);
}
export default Component39447;
