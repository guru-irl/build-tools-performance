import React from 'react';
const LABEL_5772 = 'component_5772';
export function Component5772({ value = 5772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5772, 'data-value': derived.doubled }, children);
}
export default Component5772;
