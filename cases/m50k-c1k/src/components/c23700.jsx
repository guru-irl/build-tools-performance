import React from 'react';
const LABEL_23700 = 'component_23700';
export function Component23700({ value = 23700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23700, 'data-value': derived.doubled }, children);
}
export default Component23700;
