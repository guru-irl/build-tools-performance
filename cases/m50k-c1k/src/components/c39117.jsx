import React from 'react';
const LABEL_39117 = 'component_39117';
export function Component39117({ value = 39117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39117, 'data-value': derived.doubled }, children);
}
export default Component39117;
