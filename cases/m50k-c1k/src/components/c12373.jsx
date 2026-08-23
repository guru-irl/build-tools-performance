import React from 'react';
const LABEL_12373 = 'component_12373';
export function Component12373({ value = 12373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12373, 'data-value': derived.doubled }, children);
}
export default Component12373;
