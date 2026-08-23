import React from 'react';
const LABEL_39589 = 'component_39589';
export function Component39589({ value = 39589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39589, 'data-value': derived.doubled }, children);
}
export default Component39589;
