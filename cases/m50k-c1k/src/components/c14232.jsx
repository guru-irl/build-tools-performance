import React from 'react';
const LABEL_14232 = 'component_14232';
export function Component14232({ value = 14232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14232, 'data-value': derived.doubled }, children);
}
export default Component14232;
