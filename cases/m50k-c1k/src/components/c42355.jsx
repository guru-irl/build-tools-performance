import React from 'react';
const LABEL_42355 = 'component_42355';
export function Component42355({ value = 42355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42355, 'data-value': derived.doubled }, children);
}
export default Component42355;
