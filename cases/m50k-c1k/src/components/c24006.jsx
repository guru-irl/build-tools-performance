import React from 'react';
const LABEL_24006 = 'component_24006';
export function Component24006({ value = 24006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24006, 'data-value': derived.doubled }, children);
}
export default Component24006;
