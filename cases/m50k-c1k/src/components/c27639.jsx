import React from 'react';
const LABEL_27639 = 'component_27639';
export function Component27639({ value = 27639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27639, 'data-value': derived.doubled }, children);
}
export default Component27639;
