import React from 'react';
const LABEL_7628 = 'component_7628';
export function Component7628({ value = 7628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7628, 'data-value': derived.doubled }, children);
}
export default Component7628;
