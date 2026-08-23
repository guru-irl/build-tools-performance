import React from 'react';
const LABEL_2641 = 'component_2641';
export function Component2641({ value = 2641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2641, 'data-value': derived.doubled }, children);
}
export default Component2641;
