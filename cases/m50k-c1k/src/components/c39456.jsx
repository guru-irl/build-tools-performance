import React from 'react';
const LABEL_39456 = 'component_39456';
export function Component39456({ value = 39456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39456, 'data-value': derived.doubled }, children);
}
export default Component39456;
