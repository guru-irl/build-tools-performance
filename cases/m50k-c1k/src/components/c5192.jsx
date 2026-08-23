import React from 'react';
const LABEL_5192 = 'component_5192';
export function Component5192({ value = 5192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5192, 'data-value': derived.doubled }, children);
}
export default Component5192;
