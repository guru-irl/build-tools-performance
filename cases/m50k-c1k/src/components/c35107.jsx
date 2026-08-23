import React from 'react';
const LABEL_35107 = 'component_35107';
export function Component35107({ value = 35107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35107, 'data-value': derived.doubled }, children);
}
export default Component35107;
