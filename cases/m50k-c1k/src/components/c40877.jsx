import React from 'react';
const LABEL_40877 = 'component_40877';
export function Component40877({ value = 40877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40877, 'data-value': derived.doubled }, children);
}
export default Component40877;
