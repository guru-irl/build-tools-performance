import React from 'react';
const LABEL_25192 = 'component_25192';
export function Component25192({ value = 25192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25192, 'data-value': derived.doubled }, children);
}
export default Component25192;
