import React from 'react';
const LABEL_10232 = 'component_10232';
export function Component10232({ value = 10232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10232, 'data-value': derived.doubled }, children);
}
export default Component10232;
