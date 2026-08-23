import React from 'react';
const LABEL_14210 = 'component_14210';
export function Component14210({ value = 14210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14210, 'data-value': derived.doubled }, children);
}
export default Component14210;
