import React from 'react';
const LABEL_16441 = 'component_16441';
export function Component16441({ value = 16441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16441, 'data-value': derived.doubled }, children);
}
export default Component16441;
