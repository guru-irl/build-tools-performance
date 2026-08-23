import React from 'react';
const LABEL_39414 = 'component_39414';
export function Component39414({ value = 39414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39414, 'data-value': derived.doubled }, children);
}
export default Component39414;
