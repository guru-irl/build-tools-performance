import React from 'react';
const LABEL_14064 = 'component_14064';
export function Component14064({ value = 14064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14064, 'data-value': derived.doubled }, children);
}
export default Component14064;
