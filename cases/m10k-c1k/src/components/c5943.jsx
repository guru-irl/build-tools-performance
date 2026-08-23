import React from 'react';
const LABEL_5943 = 'component_5943';
export function Component5943({ value = 5943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5943, 'data-value': derived.doubled }, children);
}
export default Component5943;
