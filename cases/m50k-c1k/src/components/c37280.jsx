import React from 'react';
const LABEL_37280 = 'component_37280';
export function Component37280({ value = 37280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37280, 'data-value': derived.doubled }, children);
}
export default Component37280;
