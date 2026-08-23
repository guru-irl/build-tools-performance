import React from 'react';
const LABEL_20280 = 'component_20280';
export function Component20280({ value = 20280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20280, 'data-value': derived.doubled }, children);
}
export default Component20280;
