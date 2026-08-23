import React from 'react';
const LABEL_2728 = 'component_2728';
export function Component2728({ value = 2728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2728, 'data-value': derived.doubled }, children);
}
export default Component2728;
