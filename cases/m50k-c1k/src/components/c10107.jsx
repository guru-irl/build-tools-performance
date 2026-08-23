import React from 'react';
const LABEL_10107 = 'component_10107';
export function Component10107({ value = 10107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10107, 'data-value': derived.doubled }, children);
}
export default Component10107;
