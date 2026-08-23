import React from 'react';
const LABEL_39621 = 'component_39621';
export function Component39621({ value = 39621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39621, 'data-value': derived.doubled }, children);
}
export default Component39621;
