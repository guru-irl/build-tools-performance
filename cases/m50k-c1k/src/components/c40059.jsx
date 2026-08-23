import React from 'react';
const LABEL_40059 = 'component_40059';
export function Component40059({ value = 40059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40059, 'data-value': derived.doubled }, children);
}
export default Component40059;
