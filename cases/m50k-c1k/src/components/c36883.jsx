import React from 'react';
const LABEL_36883 = 'component_36883';
export function Component36883({ value = 36883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36883, 'data-value': derived.doubled }, children);
}
export default Component36883;
