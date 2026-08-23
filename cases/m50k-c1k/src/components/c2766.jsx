import React from 'react';
const LABEL_2766 = 'component_2766';
export function Component2766({ value = 2766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2766, 'data-value': derived.doubled }, children);
}
export default Component2766;
