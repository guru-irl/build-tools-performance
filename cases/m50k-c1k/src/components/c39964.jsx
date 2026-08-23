import React from 'react';
const LABEL_39964 = 'component_39964';
export function Component39964({ value = 39964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39964, 'data-value': derived.doubled }, children);
}
export default Component39964;
