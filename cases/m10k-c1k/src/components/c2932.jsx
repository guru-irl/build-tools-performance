import React from 'react';
const LABEL_2932 = 'component_2932';
export function Component2932({ value = 2932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2932, 'data-value': derived.doubled }, children);
}
export default Component2932;
