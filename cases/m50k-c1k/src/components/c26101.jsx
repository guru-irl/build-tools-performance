import React from 'react';
const LABEL_26101 = 'component_26101';
export function Component26101({ value = 26101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26101, 'data-value': derived.doubled }, children);
}
export default Component26101;
