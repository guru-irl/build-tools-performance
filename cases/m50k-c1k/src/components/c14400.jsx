import React from 'react';
const LABEL_14400 = 'component_14400';
export function Component14400({ value = 14400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14400, 'data-value': derived.doubled }, children);
}
export default Component14400;
