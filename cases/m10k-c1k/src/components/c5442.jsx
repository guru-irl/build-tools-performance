import React from 'react';
const LABEL_5442 = 'component_5442';
export function Component5442({ value = 5442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5442, 'data-value': derived.doubled }, children);
}
export default Component5442;
