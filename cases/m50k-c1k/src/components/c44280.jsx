import React from 'react';
const LABEL_44280 = 'component_44280';
export function Component44280({ value = 44280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44280, 'data-value': derived.doubled }, children);
}
export default Component44280;
