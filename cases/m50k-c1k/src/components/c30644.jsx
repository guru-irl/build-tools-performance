import React from 'react';
const LABEL_30644 = 'component_30644';
export function Component30644({ value = 30644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30644, 'data-value': derived.doubled }, children);
}
export default Component30644;
