import React from 'react';
const LABEL_36353 = 'component_36353';
export function Component36353({ value = 36353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36353, 'data-value': derived.doubled }, children);
}
export default Component36353;
