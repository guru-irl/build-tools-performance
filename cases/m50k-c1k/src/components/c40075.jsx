import React from 'react';
const LABEL_40075 = 'component_40075';
export function Component40075({ value = 40075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40075, 'data-value': derived.doubled }, children);
}
export default Component40075;
