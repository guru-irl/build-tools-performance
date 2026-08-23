import React from 'react';
const LABEL_8574 = 'component_8574';
export function Component8574({ value = 8574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8574, 'data-value': derived.doubled }, children);
}
export default Component8574;
