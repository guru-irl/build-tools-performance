import React from 'react';
const LABEL_36336 = 'component_36336';
export function Component36336({ value = 36336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36336, 'data-value': derived.doubled }, children);
}
export default Component36336;
