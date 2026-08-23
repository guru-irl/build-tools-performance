import React from 'react';
const LABEL_25913 = 'component_25913';
export function Component25913({ value = 25913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25913, 'data-value': derived.doubled }, children);
}
export default Component25913;
