import React from 'react';
const LABEL_39466 = 'component_39466';
export function Component39466({ value = 39466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39466, 'data-value': derived.doubled }, children);
}
export default Component39466;
