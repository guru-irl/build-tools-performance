import React from 'react';
const LABEL_2818 = 'component_2818';
export function Component2818({ value = 2818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2818, 'data-value': derived.doubled }, children);
}
export default Component2818;
