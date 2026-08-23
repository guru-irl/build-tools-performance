import React from 'react';
const LABEL_1280 = 'component_1280';
export function Component1280({ value = 1280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1280, 'data-value': derived.doubled }, children);
}
export default Component1280;
