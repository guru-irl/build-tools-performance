import React from 'react';
const LABEL_40107 = 'component_40107';
export function Component40107({ value = 40107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40107, 'data-value': derived.doubled }, children);
}
export default Component40107;
