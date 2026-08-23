import React from 'react';
const LABEL_26877 = 'component_26877';
export function Component26877({ value = 26877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26877, 'data-value': derived.doubled }, children);
}
export default Component26877;
