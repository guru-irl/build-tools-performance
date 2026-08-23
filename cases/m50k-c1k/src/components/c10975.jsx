import React from 'react';
const LABEL_10975 = 'component_10975';
export function Component10975({ value = 10975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10975, 'data-value': derived.doubled }, children);
}
export default Component10975;
