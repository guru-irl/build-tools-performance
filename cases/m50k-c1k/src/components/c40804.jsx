import React from 'react';
const LABEL_40804 = 'component_40804';
export function Component40804({ value = 40804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40804, 'data-value': derived.doubled }, children);
}
export default Component40804;
