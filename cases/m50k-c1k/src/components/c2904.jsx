import React from 'react';
const LABEL_2904 = 'component_2904';
export function Component2904({ value = 2904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2904, 'data-value': derived.doubled }, children);
}
export default Component2904;
