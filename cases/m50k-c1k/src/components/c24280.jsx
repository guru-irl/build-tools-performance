import React from 'react';
const LABEL_24280 = 'component_24280';
export function Component24280({ value = 24280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24280, 'data-value': derived.doubled }, children);
}
export default Component24280;
