import React from 'react';
const LABEL_39048 = 'component_39048';
export function Component39048({ value = 39048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39048, 'data-value': derived.doubled }, children);
}
export default Component39048;
