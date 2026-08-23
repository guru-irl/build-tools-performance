import React from 'react';
const LABEL_16877 = 'component_16877';
export function Component16877({ value = 16877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16877, 'data-value': derived.doubled }, children);
}
export default Component16877;
