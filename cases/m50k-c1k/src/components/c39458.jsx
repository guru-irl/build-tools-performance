import React from 'react';
const LABEL_39458 = 'component_39458';
export function Component39458({ value = 39458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39458, 'data-value': derived.doubled }, children);
}
export default Component39458;
