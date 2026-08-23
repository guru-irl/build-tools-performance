import React from 'react';
const LABEL_20107 = 'component_20107';
export function Component20107({ value = 20107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20107, 'data-value': derived.doubled }, children);
}
export default Component20107;
