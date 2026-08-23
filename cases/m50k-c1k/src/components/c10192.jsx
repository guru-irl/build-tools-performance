import React from 'react';
const LABEL_10192 = 'component_10192';
export function Component10192({ value = 10192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10192, 'data-value': derived.doubled }, children);
}
export default Component10192;
