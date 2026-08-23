import React from 'react';
const LABEL_39356 = 'component_39356';
export function Component39356({ value = 39356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39356, 'data-value': derived.doubled }, children);
}
export default Component39356;
