import React from 'react';
const LABEL_39695 = 'component_39695';
export function Component39695({ value = 39695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39695, 'data-value': derived.doubled }, children);
}
export default Component39695;
