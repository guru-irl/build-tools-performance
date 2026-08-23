import React from 'react';
const LABEL_2895 = 'component_2895';
export function Component2895({ value = 2895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2895, 'data-value': derived.doubled }, children);
}
export default Component2895;
