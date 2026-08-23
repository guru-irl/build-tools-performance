import React from 'react';
const LABEL_39772 = 'component_39772';
export function Component39772({ value = 39772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39772, 'data-value': derived.doubled }, children);
}
export default Component39772;
