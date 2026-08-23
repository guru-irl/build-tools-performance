import React from 'react';
const LABEL_39758 = 'component_39758';
export function Component39758({ value = 39758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39758, 'data-value': derived.doubled }, children);
}
export default Component39758;
