import React from 'react';
const LABEL_34187 = 'component_34187';
export function Component34187({ value = 34187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34187, 'data-value': derived.doubled }, children);
}
export default Component34187;
