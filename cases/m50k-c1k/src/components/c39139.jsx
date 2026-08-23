import React from 'react';
const LABEL_39139 = 'component_39139';
export function Component39139({ value = 39139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39139, 'data-value': derived.doubled }, children);
}
export default Component39139;
