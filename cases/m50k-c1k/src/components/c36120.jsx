import React from 'react';
const LABEL_36120 = 'component_36120';
export function Component36120({ value = 36120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36120, 'data-value': derived.doubled }, children);
}
export default Component36120;
