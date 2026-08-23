import React from 'react';
const LABEL_12527 = 'component_12527';
export function Component12527({ value = 12527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12527, 'data-value': derived.doubled }, children);
}
export default Component12527;
