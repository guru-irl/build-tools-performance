import React from 'react';
const LABEL_36107 = 'component_36107';
export function Component36107({ value = 36107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36107, 'data-value': derived.doubled }, children);
}
export default Component36107;
