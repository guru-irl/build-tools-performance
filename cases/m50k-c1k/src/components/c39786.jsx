import React from 'react';
const LABEL_39786 = 'component_39786';
export function Component39786({ value = 39786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39786, 'data-value': derived.doubled }, children);
}
export default Component39786;
