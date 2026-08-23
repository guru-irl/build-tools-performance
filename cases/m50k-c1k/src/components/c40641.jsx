import React from 'react';
const LABEL_40641 = 'component_40641';
export function Component40641({ value = 40641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40641, 'data-value': derived.doubled }, children);
}
export default Component40641;
