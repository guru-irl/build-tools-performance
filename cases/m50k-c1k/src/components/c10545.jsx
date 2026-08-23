import React from 'react';
const LABEL_10545 = 'component_10545';
export function Component10545({ value = 10545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10545, 'data-value': derived.doubled }, children);
}
export default Component10545;
