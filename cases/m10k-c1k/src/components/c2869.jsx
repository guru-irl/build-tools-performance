import React from 'react';
const LABEL_2869 = 'component_2869';
export function Component2869({ value = 2869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2869, 'data-value': derived.doubled }, children);
}
export default Component2869;
