import React from 'react';
const LABEL_14877 = 'component_14877';
export function Component14877({ value = 14877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14877, 'data-value': derived.doubled }, children);
}
export default Component14877;
