import React from 'react';
const LABEL_2975 = 'component_2975';
export function Component2975({ value = 2975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2975, 'data-value': derived.doubled }, children);
}
export default Component2975;
